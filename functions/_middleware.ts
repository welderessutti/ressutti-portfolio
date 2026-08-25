interface Env {
  ASSETS: { fetch: typeof fetch };
}

const LANGUAGE_COOKIE_NAME = 'preferred-language';

const LOCALES = [
  { code: 'en-GB', path: 'en-gb', language: 'en' },
  { code: 'pt-BR', path: 'pt-br', language: 'pt' },
] as const;

type Locale = (typeof LOCALES)[number];
type LocalePath = Locale['path'];

const DEFAULT_LOCALE_PATH: LocalePath = 'en-gb';

const STATIC_DIRECTORY_PREFIXES = ['/documents/', '/icons/', '/images/'] as const;
const STATIC_ROOT_FILES = new Set([
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

interface LanguagePreference {
  readonly index: number;
  readonly quality: number;
  readonly range: string;
}

function findLocale(value: string | null | undefined): Locale | undefined {
  const normalizedValue = value?.trim().toLowerCase();

  return LOCALES.find(
    (locale) => locale.code.toLowerCase() === normalizedValue || locale.path === normalizedValue,
  );
}

function readCookie(request: Request, name: string): string | undefined {
  const cookies = request.headers.get('cookie')?.split(';') ?? [];

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

function parseAcceptLanguage(header: string): LanguagePreference[] {
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

function getMatchSpecificity(locale: Locale, range: string): number {
  if (range === locale.code.toLowerCase() || range === locale.path) return 3;
  if (range === locale.language) return 2;
  if (range.split('-')[0] === locale.language) return 1;
  if (range === '*') return 0;

  return -1;
}

function detectLocale(request: Request): Locale {
  const cookieLocale = findLocale(readCookie(request, LANGUAGE_COOKIE_NAME));

  if (cookieLocale) return cookieLocale;

  const preferences = parseAcceptLanguage(request.headers.get('accept-language') ?? '');
  const candidates = LOCALES.map((locale) => {
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

  return candidates[0]?.locale ?? findLocale(DEFAULT_LOCALE_PATH)!;
}

function isStaticAssetRequest(pathname: string): boolean {
  if (STATIC_ROOT_FILES.has(pathname)) return true;
  if (STATIC_DIRECTORY_PREFIXES.some((prefix) => pathname.startsWith(prefix))) return true;

  try {
    return decodeURIComponent(pathname).split('/').at(-1)?.includes('.') ?? false;
  } catch {
    return pathname.split('/').at(-1)?.includes('.') ?? false;
  }
}

function appendVary(headers: Headers, values: readonly string[]): void {
  const varyValues = new Set(
    (headers.get('vary') ?? '')
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean),
  );

  values.forEach((value) => varyValues.add(value));
  headers.set('vary', [...varyValues].join(', '));
}

function withContentLanguage(response: Response, locale: Locale): Response {
  const headers = new Headers(response.headers);

  headers.set('content-language', locale.code);

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

async function fetchNotFoundAsset(
  context: Parameters<PagesFunction<Env>>[0],
  pathname: string,
): Promise<Response> {
  const assetUrl = new URL(pathname, context.request.url);
  const headers = new Headers(context.request.headers);

  headers.delete('if-modified-since');
  headers.delete('if-none-match');
  headers.delete('range');

  return context.env.ASSETS.fetch(
    new Request(assetUrl, {
      method: 'GET',
      headers,
    }),
  );
}

async function resolveDirectoryRedirect(
  context: Parameters<PagesFunction<Env>>[0],
  response: Response,
): Promise<Response> {
  if (![301, 302, 307, 308].includes(response.status)) return response;

  const location = response.headers.get('location');

  if (!location) return response;

  const requestUrl = new URL(context.request.url);
  const targetUrl = new URL(location, requestUrl);

  if (
    targetUrl.origin !== requestUrl.origin ||
    requestUrl.pathname.endsWith('/') ||
    targetUrl.pathname !== `${requestUrl.pathname}/`
  ) {
    return response;
  }

  return context.env.ASSETS.fetch(
    new Request(targetUrl, {
      method: context.request.method,
      headers: context.request.headers,
    }),
  );
}

async function serveLocaleNotFound(
  context: Parameters<PagesFunction<Env>>[0],
  locale: Locale,
  negotiated: boolean,
): Promise<Response> {
  let notFoundResponse = await fetchNotFoundAsset(context, `/${locale.path}/404`);

  if (!notFoundResponse.body) {
    notFoundResponse = await fetchNotFoundAsset(context, '/404.html');
  }

  const headers = new Headers(notFoundResponse.headers);
  headers.set('cache-control', 'no-store');
  headers.set('content-language', locale.code);
  headers.set('content-type', 'text/html; charset=utf-8');
  headers.set('x-robots-tag', 'noindex, follow');

  if (negotiated) appendVary(headers, ['Cookie', 'Accept-Language']);

  return new Response(context.request.method === 'HEAD' ? null : notFoundResponse.body, {
    status: 404,
    statusText: 'Not Found',
    headers,
  });
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request } = context;

  if (request.method !== 'GET' && request.method !== 'HEAD') return context.next();

  const url = new URL(request.url);
  const { pathname } = url;

  if (isStaticAssetRequest(pathname)) return context.next();

  if (pathname === '/') {
    const locale = detectLocale(request);
    const headers = new Headers({
      'cache-control': 'no-store',
      location: `/${locale.path}/${url.search}`,
    });

    appendVary(headers, ['Cookie', 'Accept-Language']);

    return new Response(null, { status: 302, headers });
  }

  const firstSegment = pathname.split('/')[1]?.toLowerCase();
  const locale = findLocale(firstSegment);

  if (!locale) return serveLocaleNotFound(context, detectLocale(request), true);

  if (pathname.toLowerCase().replace(/\/+$/, '') === `/${locale.path}/404`) {
    return serveLocaleNotFound(context, locale, false);
  }

  let response = await context.next();

  response = await resolveDirectoryRedirect(context, response);

  if (response.status === 404) return serveLocaleNotFound(context, locale, false);

  return withContentLanguage(response, locale);
};
