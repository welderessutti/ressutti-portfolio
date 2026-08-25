import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, isAbsolute, join, normalize, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const projectRoot = resolve(__dirname, '..');
const publicRoot = resolve(projectRoot, 'dist/ressutti-portfolio/browser');
const port = Number(process.env.PORT ?? 4173);
const languageCookieName = 'preferred-language';

const locales = [
  { code: 'en-GB', path: 'en-gb', language: 'en' },
  { code: 'pt-BR', path: 'pt-br', language: 'pt' },
];

const defaultLocale = locales[0];
const staticDirectoryPrefixes = ['/documents/', '/icons/', '/images/'];
const staticRootFiles = new Set([
  '/404.html',
  '/apple-touch-icon.png',
  '/favicon-96x96.png',
  '/favicon.ico',
  '/favicon.svg',
  '/robots.txt',
  '/site.webmanifest',
  '/sitemap.xml',
  '/web-app-manifest-192x192.png',
  '/web-app-manifest-512x512.png',
]);

const mimeTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.html', 'text/html; charset=utf-8'],
  ['.ico', 'image/x-icon'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.pdf', 'application/pdf'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml'],
  ['.txt', 'text/plain; charset=utf-8'],
  ['.webmanifest', 'application/manifest+json; charset=utf-8'],
  ['.webp', 'image/webp'],
  ['.xml', 'application/xml; charset=utf-8'],
]);

function hasBuiltSite() {
  return locales.every((locale) => existsSync(join(publicRoot, locale.path, 'index.html')));
}

function findLocale(value) {
  const normalizedValue = value?.trim().toLowerCase();

  return locales.find(
    (locale) => locale.code.toLowerCase() === normalizedValue || locale.path === normalizedValue,
  );
}

function readCookie(headers, name) {
  const cookies = headers.cookie?.split(';') ?? [];

  for (const cookie of cookies) {
    const separatorIndex = cookie.indexOf('=');

    if (separatorIndex === -1 || cookie.slice(0, separatorIndex).trim() !== name) continue;

    try {
      return decodeURIComponent(cookie.slice(separatorIndex + 1).trim());
    } catch {
      return undefined;
    }
  }

  return undefined;
}

function parseAcceptLanguage(header) {
  return header
    .split(',')
    .map((part, index) => {
      const [rawRange, ...rawParameters] = part.split(';');
      const range = rawRange.trim().toLowerCase();
      const qualityParameter = rawParameters
        .map((parameter) => parameter.trim())
        .find((parameter) => parameter.toLowerCase().startsWith('q='));
      const parsedQuality = qualityParameter ? Number(qualityParameter.slice(2).trim()) : 1;
      const quality =
        Number.isFinite(parsedQuality) && parsedQuality >= 0 && parsedQuality <= 1
          ? parsedQuality
          : 0;

      return { index, quality, range };
    })
    .filter((preference) => preference.range.length > 0);
}

function getMatchSpecificity(locale, range) {
  if (range === locale.code.toLowerCase() || range === locale.path) return 3;
  if (range === locale.language) return 2;
  if (range.split('-')[0] === locale.language) return 1;
  if (range === '*') return 0;

  return -1;
}

function detectLocale(headers) {
  const cookieLocale = findLocale(readCookie(headers, languageCookieName));

  if (cookieLocale) return cookieLocale;

  const preferences = parseAcceptLanguage(headers['accept-language'] ?? '');
  const candidates = locales
    .map((locale) => {
      const matchingPreferences = preferences
        .map((preference) => ({
          ...preference,
          specificity: getMatchSpecificity(locale, preference.range),
        }))
        .filter((preference) => preference.specificity >= 0)
        .sort(
          (first, second) => second.specificity - first.specificity || first.index - second.index,
        );
      const effectivePreference = matchingPreferences[0];

      return {
        locale,
        quality: effectivePreference?.quality ?? 0,
        index: effectivePreference?.index ?? Number.MAX_SAFE_INTEGER,
      };
    })
    .filter((candidate) => candidate.quality > 0)
    .sort((first, second) => second.quality - first.quality || first.index - second.index);

  return candidates[0]?.locale ?? defaultLocale;
}

function isStaticAssetRequest(pathname) {
  if (staticRootFiles.has(pathname)) return true;
  if (staticDirectoryPrefixes.some((prefix) => pathname.startsWith(prefix))) return true;

  try {
    return decodeURIComponent(pathname).split('/').at(-1)?.includes('.') ?? false;
  } catch {
    return pathname.split('/').at(-1)?.includes('.') ?? false;
  }
}

function resolveRequestPath(pathname) {
  let decodedPath;

  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    return null;
  }

  const normalizedPath = normalize(decodedPath).replace(/^(\.\.[/\\])+/, '');
  const requestedPath = resolve(publicRoot, `.${normalizedPath}`);
  const relativePath = relative(publicRoot, requestedPath);

  if (relativePath.startsWith('..') || isAbsolute(relativePath)) return null;

  if (existsSync(requestedPath) && statSync(requestedPath).isFile()) {
    return requestedPath;
  }

  const indexPath = join(requestedPath, 'index.html');

  return existsSync(indexPath) && statSync(indexPath).isFile() ? indexPath : null;
}

function writeFileResponse(response, request, filePath, status, options = {}) {
  const extension = extname(filePath);
  const headers = {
    'cache-control': 'no-store',
    'content-type': mimeTypes.get(extension) ?? 'application/octet-stream',
    ...options.headers,
  };

  if (options.locale && extension === '.html') {
    headers['content-language'] = options.locale.code;
  }

  if (status === 404) headers['x-robots-tag'] = 'noindex, follow';

  response.writeHead(status, headers);

  if (request.method === 'HEAD') {
    response.end();
    return;
  }

  createReadStream(filePath).pipe(response);
}

function serveNotFound(response, request, locale, negotiated) {
  const localizedNotFound = resolveRequestPath(`/${locale.path}/404`);
  const fallbackNotFound = resolveRequestPath('/404.html');
  const notFoundPath = localizedNotFound ?? fallbackNotFound;

  if (!notFoundPath) {
    response.writeHead(404, {
      'cache-control': 'no-store',
      'content-type': 'text/plain; charset=utf-8',
      'x-robots-tag': 'noindex, follow',
    });
    response.end(request.method === 'HEAD' ? undefined : 'Not found');
    return;
  }

  writeFileResponse(response, request, notFoundPath, 404, {
    locale,
    headers: negotiated ? { vary: 'Cookie, Accept-Language' } : {},
  });
}

const server = createServer((request, response) => {
  if (!hasBuiltSite()) {
    response.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Build not found. Run "npm run build" before "npm run preview:ssg".');
    return;
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, {
      allow: 'GET, HEAD',
      'content-type': 'text/plain; charset=utf-8',
    });
    response.end('Method not allowed');
    return;
  }

  const url = new URL(request.url ?? '/', `http://${request.headers.host ?? 'localhost'}`);

  if (url.pathname === '/') {
    const locale = detectLocale(request.headers);

    response.writeHead(302, {
      'cache-control': 'no-store',
      location: `/${locale.path}/${url.search}`,
      vary: 'Cookie, Accept-Language',
    });
    response.end();
    return;
  }

  const firstSegment = url.pathname.split('/')[1]?.toLowerCase();
  const locale = findLocale(firstSegment);
  const filePath = resolveRequestPath(url.pathname);

  if (filePath) {
    const isLocalizedNotFound =
      locale && url.pathname.toLowerCase().replace(/\/+$/, '') === `/${locale.path}/404`;

    writeFileResponse(response, request, filePath, isLocalizedNotFound ? 404 : 200, {
      locale,
    });
    return;
  }

  if (isStaticAssetRequest(url.pathname)) {
    const fallbackNotFound = resolveRequestPath('/404.html');

    if (fallbackNotFound) {
      writeFileResponse(response, request, fallbackNotFound, 404);
      return;
    }
  }

  serveNotFound(response, request, locale ?? detectLocale(request.headers), !locale);
});

server.listen(port, () => {
  console.log(`SSG preview running at http://localhost:${port}`);
  console.log(`Serving ${publicRoot}`);
});
