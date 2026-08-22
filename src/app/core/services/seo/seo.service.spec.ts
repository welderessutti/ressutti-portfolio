import { DOCUMENT } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { SeoService } from './seo.service';
import { ROUTES } from '../../../shared/i18n/routes';

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
        'meta[name="description"], meta[name="robots"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"], link[rel="alternate"], #json-ld',
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
    expect(getMetaContent('meta[name="robots"]')).toBe(
      'index, follow, max-image-preview:large',
    );
    expect(getMetaContent('meta[property="og:title"]')).toBe(
      'Indexable page | Welder Ressutti',
    );
    expect(getMetaContent('meta[property="og:description"]')).toBe(
      'Indexable page description.',
    );
    expect(getMetaContent('meta[property="og:image"]')).toBe(
      `https://www.ressutti.com/en-gb/${image}`,
    );
    expect(getMetaContent('meta[property="og:site_name"]')).toBe('ressutti.com');
    expect(getMetaContent('meta[property="og:url"]')).toBe('https://www.ressutti.com/en-gb/');
    expect(getMetaContent('meta[name="twitter:card"]')).toBe('summary_large_image');
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute('href')).toBe(
      'https://www.ressutti.com/en-gb/',
    );
    expect(document.querySelectorAll('link[rel="alternate"]')).toHaveLength(3);
    expect(document.getElementById('json-ld')).not.toBeNull();
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
      `https://www.ressutti.com/en-gb/${image}`,
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

    expect(getMetaContent('meta[name="robots"]')).toBe(
      'index, follow, max-image-preview:large',
    );
    expect(getMetaContent('meta[property="og:site_name"]')).toBe('ressutti.com');
    expect(getMetaContent('meta[name="twitter:card"]')).toBe('summary_large_image');
    expect(document.querySelector('link[rel="canonical"]')).not.toBeNull();
    expect(document.querySelectorAll('link[rel="alternate"]')).toHaveLength(3);
    expect(document.getElementById('json-ld')).not.toBeNull();
  });
});
