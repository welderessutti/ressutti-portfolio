import { DEFAULT_LOCALE, LOCALES, SUPPORTED_LOCALES } from './locales';
import { ROUTES } from './routes';

describe('localised route configuration', () => {
  it('should expose the supported locales with English as the default', () => {
    expect(SUPPORTED_LOCALES).toEqual([LOCALES.enGB, LOCALES.ptBR]);
    expect(DEFAULT_LOCALE).toBe(LOCALES.enGB);
  });

  it.each(Object.values(LOCALES))(
    'should provide unique, single-segment routes for %s',
    (locale) => {
      const routeSegments = Object.values(ROUTES).map((route) => route[locale]);

      expect(new Set(routeSegments).size).toBe(routeSegments.length);
      expect(routeSegments.every((segment) => !segment.includes('/'))).toBe(true);
    },
  );

  it('should translate only the first route segment between builds', () => {
    expect(ROUTES.projects).toEqual({
      [LOCALES.enGB]: 'projects',
      [LOCALES.ptBR]: 'projetos',
    });
    expect(ROUTES.about).toEqual({
      [LOCALES.enGB]: 'about',
      [LOCALES.ptBR]: 'sobre',
    });
    expect(ROUTES.contact).toEqual({
      [LOCALES.enGB]: 'contact',
      [LOCALES.ptBR]: 'contato',
    });
  });
});
