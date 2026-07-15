import { createServer } from 'node:http';
import { createReadStream, existsSync, statSync } from 'node:fs';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const projectRoot = resolve(__dirname, '..');
const publicRoot = resolve(projectRoot, 'dist/ressutti-portfolio/browser');
const port = Number(process.env.PORT ?? 4173);

const locales = {
  enGB: 'en-gb',
  ptBR: 'pt-br',
};

const mimeTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.html', 'text/html; charset=utf-8'],
  ['.ico', 'image/x-icon'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.svg', 'image/svg+xml'],
  ['.webmanifest', 'application/manifest+json; charset=utf-8'],
  ['.webp', 'image/webp'],
  ['.xml', 'application/xml; charset=utf-8'],
]);

function hasBuiltSite() {
  return existsSync(join(publicRoot, locales.enGB)) || existsSync(join(publicRoot, locales.ptBR));
}

function readCookie(headers, name) {
  const cookie = headers.cookie ?? '';
  const match = cookie.match(new RegExp(`(?:^|; )${name}=([^;]+)`));

  return match ? decodeURIComponent(match[1]) : null;
}

function detectLocale(headers) {
  const preferredLanguage = readCookie(headers, 'preferred-language');

  if (preferredLanguage?.toLowerCase() === 'pt-br') {
    return locales.ptBR;
  }

  if (preferredLanguage?.toLowerCase() === 'en-gb') {
    return locales.enGB;
  }

  return headers['accept-language']?.toLowerCase().includes('pt') ? locales.ptBR : locales.enGB;
}

function resolveRequestPath(pathname) {
  const decodedPath = decodeURIComponent(pathname);
  const normalizedPath = normalize(decodedPath).replace(/^(\.\.[/\\])+/, '');
  const requestedPath = resolve(publicRoot, `.${normalizedPath}`);

  if (!requestedPath.startsWith(publicRoot)) {
    return null;
  }

  if (existsSync(requestedPath) && statSync(requestedPath).isFile()) {
    return requestedPath;
  }

  const indexPath = join(requestedPath, 'index.html');

  return existsSync(indexPath) ? indexPath : null;
}

const server = createServer((request, response) => {
  if (!hasBuiltSite()) {
    response.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Build not found. Run "npm run build" before "npm run preview:ssg".');
    return;
  }

  const url = new URL(request.url ?? '/', `http://${request.headers.host ?? 'localhost'}`);

  if (url.pathname === '/') {
    const locale = detectLocale(request.headers);

    response.writeHead(302, {
      location: `/${locale}/`,
      vary: 'Accept-Language, Cookie',
    });
    response.end();
    return;
  }

  const filePath = resolveRequestPath(url.pathname);

  if (!filePath) {
    response.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' });
    response.end('Not found');
    return;
  }

  const extension = extname(filePath);
  const contentType = mimeTypes.get(extension) ?? 'application/octet-stream';

  response.writeHead(200, {
    'content-type': contentType,
    'cache-control': 'no-store',
  });

  createReadStream(filePath).pipe(response);
});

server.listen(port, () => {
  console.log(`SSG preview running at http://localhost:${port}`);
  console.log(`Serving ${publicRoot}`);
});
