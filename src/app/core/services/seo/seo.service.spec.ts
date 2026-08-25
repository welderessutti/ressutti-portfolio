import { DOCUMENT } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { SeoService } from './seo.service';
import { ROUTES } from '../../../shared/i18n/routes';
import { LOCALES } from '../../../shared/i18n/locales';
import { PROFILE } from '../../../shared/data/profile.data';

describe('SeoService', () => {
  let service: SeoService;
  let document: Document;

  const image = 'images/seo/pages/wr-logo-frame-gradient-seo-image.webp';

  function getMetaContent(selector: string): string | null {
    return document.querySelector<HTMLMetaElement>(selector)?.content ?? null;
  }

  function updateIndexableSeo(): void {
    service.updateSeo({
      indexable: true,
      title: 'Indexable page | Welder Ressutti',
      description: 'Indexable page description.',
      currentLocale: 'en-GB',
      path: ROUTES.home,
      image,
      imageAlt: 'WR logo for Welder Ressutti — ressutti.com',
      openGraphType: 'website',
      jsonLdType: 'WebPage',
    });
  }

  function updateNonIndexableSeo(): void {
    service.updateSeo({
      indexable: false,
      title: 'Page Not Found | ressutti.com',
      description: 'The requested page could not be found on ressutti.com.',
      currentLocale: 'en-GB',
      image,
    });
  }

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeoService);
    document = TestBed.inject(DOCUMENT);
  });

  afterEach(() => {
    document
      .querySelectorAll(
        'meta[name="description"], meta[name="robots"], meta[name="theme-color"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"], link[rel="alternate"], #json-ld',
      )
      .forEach((element) => element.remove());

    document.title = '';
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add the complete metadata set for an indexable page', () => {
    updateIndexableSeo();

    expect(document.title).toBe('Indexable page | Welder Ressutti');
    expect(getMetaContent('meta[name="description"]')).toBe('Indexable page description.');
    expect(getMetaContent('meta[name="robots"]')).toBe('index, follow, max-image-preview:large');
    expect(getMetaContent('meta[property="og:title"]')).toBe('Indexable page | Welder Ressutti');
    expect(getMetaContent('meta[property="og:description"]')).toBe('Indexable page description.');
    expect(getMetaContent('meta[property="og:image"]')).toBe(
      `https://www.ressutti.com/${image}`,
    );
    expect(getMetaContent('meta[property="og:site_name"]')).toBe('ressutti.com');
    expect(getMetaContent('meta[property="og:image:alt"]')).toBe(
      'WR logo for Welder Ressutti — ressutti.com',
    );
    expect(getMetaContent('meta[property="og:image:width"]')).toBe('1200');
    expect(getMetaContent('meta[property="og:image:height"]')).toBe('630');
    expect(getMetaContent('meta[property="og:type"]')).toBe('website');
    expect(getMetaContent('meta[property="og:url"]')).toBe('https://www.ressutti.com/en-gb/');
    expect(getMetaContent('meta[property="og:locale"]')).toBe('en_GB');
    expect(getMetaContent('meta[property="og:locale:alternate"]')).toBe('pt_BR');
    expect(getMetaContent('meta[name="twitter:card"]')).toBe('summary_large_image');
    expect(getMetaContent('meta[name="twitter:title"]')).toBe('Indexable page | Welder Ressutti');
    expect(getMetaContent('meta[name="twitter:description"]')).toBe('Indexable page description.');
    expect(getMetaContent('meta[name="twitter:image"]')).toBe(
      `https://www.ressutti.com/${image}`,
    );
    expect(getMetaContent('meta[name="twitter:image:alt"]')).toBe(
      'WR logo for Welder Ressutti — ressutti.com',
    );
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://www.ressutti.com/en-gb/',
    );
    expect(document.querySelectorAll('link[rel="alternate"]')).toHaveLength(3);
    expect(document.getElementById('json-ld')).not.toBeNull();
  });

  it('should create exact canonical and hreflang links for a localised project page', () => {
    service.updateSeo({
      indexable: true,
      title: 'Projeto',
      description: 'Descrição do projeto.',
      currentLocale: LOCALES.ptBR,
      path: ROUTES.projects,
      slug: 'glicare',
      image,
      imageAlt: 'Imagem do projeto',
      openGraphType: 'website',
      jsonLdType: 'WebPage',
    });

    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://www.ressutti.com/pt-br/projetos/glicare',
    );
    expect(getMetaContent('meta[property="og:url"]')).toBe(
      'https://www.ressutti.com/pt-br/projetos/glicare',
    );
    expect(getMetaContent('meta[property="og:locale"]')).toBe('pt_BR');
    expect(getMetaContent('meta[property="og:locale:alternate"]')).toBe('en_GB');

    const alternates = Array.from(
      document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"]'),
      (link) => ({ hreflang: link.hreflang, href: link.href }),
    );

    expect(alternates).toEqual([
      {
        hreflang: LOCALES.enGB,
        href: 'https://www.ressutti.com/en-gb/projects/glicare',
      },
      {
        hreflang: LOCALES.ptBR,
        href: 'https://www.ressutti.com/pt-br/projetos/glicare',
      },
      {
        hreflang: 'x-default',
        href: 'https://www.ressutti.com/en-gb/projects/glicare',
      },
    ]);
  });

  it('should publish valid WebPage, WebSite and Person structured data', () => {
    updateIndexableSeo();

    const jsonLd = JSON.parse(document.getElementById('json-ld')?.textContent ?? '{}') as {
      '@context': string;
      '@graph': Array<Record<string, unknown>>;
    };

    expect(jsonLd['@context']).toBe('https://schema.org');
    expect(jsonLd['@graph']).toHaveLength(3);
    expect(jsonLd['@graph'][0]).toMatchObject({
      '@type': 'WebPage',
      '@id': 'https://www.ressutti.com/en-gb/#webpage',
      url: 'https://www.ressutti.com/en-gb/',
      inLanguage: LOCALES.enGB,
      image: `https://www.ressutti.com/${image}`,
    });
    expect(jsonLd['@graph'][1]).toMatchObject({
      '@type': 'WebSite',
      '@id': 'https://www.ressutti.com/#website',
      url: 'https://www.ressutti.com',
      inLanguage: [LOCALES.enGB, LOCALES.ptBR],
    });
    expect(jsonLd['@graph'][2]).toMatchObject({
      '@type': 'Person',
      '@id': 'https://www.ressutti.com/#person',
      name: PROFILE.name,
      sameAs: [PROFILE.linkedinUrl, PROFILE.githubUrl],
    });
  });

  it('should update indexable metadata idempotently without duplicate managed elements', () => {
    updateIndexableSeo();
    updateIndexableSeo();

    expect(document.querySelectorAll('meta[name="description"]')).toHaveLength(1);
    expect(document.querySelectorAll('meta[name="robots"]')).toHaveLength(1);
    expect(document.querySelectorAll('meta[property="og:title"]')).toHaveLength(1);
    expect(document.querySelectorAll('meta[property="og:locale:alternate"]')).toHaveLength(1);
    expect(document.querySelectorAll('link[rel="canonical"]')).toHaveLength(1);
    expect(document.querySelectorAll('link[rel="alternate"]')).toHaveLength(3);
    expect(document.querySelectorAll('#json-ld')).toHaveLength(1);
  });

  it('should keep only the approved metadata when changing to a non-indexable page', () => {
    updateIndexableSeo();
    updateNonIndexableSeo();

    expect(document.title).toBe('Page Not Found | ressutti.com');
    expect(getMetaContent('meta[name="description"]')).toBe(
      'The requested page could not be found on ressutti.com.',
    );
    expect(getMetaContent('meta[name="robots"]')).toBe('noindex, follow');
    expect(getMetaContent('meta[property="og:title"]')).toBe('Page Not Found | ressutti.com');
    expect(getMetaContent('meta[property="og:description"]')).toBe(
      'The requested page could not be found on ressutti.com.',
    );
    expect(getMetaContent('meta[property="og:image"]')).toBe(
      `https://www.ressutti.com/${image}`,
    );

    const openGraphProperties = Array.from(
      document.querySelectorAll<HTMLMetaElement>('meta[property^="og:"]'),
      (meta) => meta.getAttribute('property'),
    ).sort();

    expect(openGraphProperties).toEqual(['og:description', 'og:image', 'og:title']);
    expect(document.querySelectorAll('meta[name^="twitter:"]')).toHaveLength(0);
    expect(document.querySelector('link[rel="canonical"]')).toBeNull();
    expect(document.querySelectorAll('link[rel="alternate"]')).toHaveLength(0);
    expect(document.getElementById('json-ld')).toBeNull();
  });

  it('should restore the complete metadata set when returning to an indexable page', () => {
    updateNonIndexableSeo();
    updateIndexableSeo();

    expect(getMetaContent('meta[name="robots"]')).toBe('index, follow, max-image-preview:large');
    expect(getMetaContent('meta[property="og:site_name"]')).toBe('ressutti.com');
    expect(getMetaContent('meta[name="twitter:card"]')).toBe('summary_large_image');
    expect(document.querySelector('link[rel="canonical"]')).not.toBeNull();
    expect(document.querySelectorAll('link[rel="alternate"]')).toHaveLength(3);
    expect(document.getElementById('json-ld')).not.toBeNull();
  });

  it('should update the existing theme color without creating duplicate metadata', () => {
    const themeColorMeta = document.createElement('meta');
    themeColorMeta.name = 'theme-color';
    themeColorMeta.content = '#fcfcfe';
    themeColorMeta.setAttribute('data-theme-color-light', '#fcfcfe');
    themeColorMeta.setAttribute('data-theme-color-dark', '#0b0f19');
    document.head.appendChild(themeColorMeta);

    service.updateThemeColor(true);

    expect(getMetaContent('meta[name="theme-color"]')).toBe('#0b0f19');
    expect(document.querySelectorAll('meta[name="theme-color"]')).toHaveLength(1);

    service.updateThemeColor(false);

    expect(getMetaContent('meta[name="theme-color"]')).toBe('#fcfcfe');
    expect(document.querySelectorAll('meta[name="theme-color"]')).toHaveLength(1);
  });

  it('should leave the document unchanged when theme color metadata is unavailable', () => {
    service.updateThemeColor(true);

    expect(document.querySelector('meta[name="theme-color"]')).toBeNull();
  });
});
