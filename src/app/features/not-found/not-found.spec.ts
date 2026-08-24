import { DOCUMENT } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NotFound } from './not-found';

describe('NotFound', () => {
  let component: NotFound;
  let fixture: ComponentFixture<NotFound>;
  let document: Document;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFound],
      providers: [provideRouter([])],
    }).compileComponents();

    document = TestBed.inject(DOCUMENT);
    document.documentElement.lang = 'en-GB';
    fixture = TestBed.createComponent(NotFound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  afterEach(() => {
    document
      .querySelectorAll(
        'meta[name="description"], meta[name="robots"], meta[property^="og:"], meta[name^="twitter:"], link[rel="canonical"], link[rel="alternate"], #json-ld',
      )
      .forEach((element) => element.remove());

    document.title = '';
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set only the approved non-indexable metadata', () => {
    expect(document.title).toBe('Page Not Found | ressutti.com');
    expect(document.querySelector<HTMLMetaElement>('meta[name="description"]')?.content).toBe(
      'The requested page could not be found on ressutti.com. Check the address or continue to the home or projects pages.',
    );
    expect(document.querySelector<HTMLMetaElement>('meta[name="robots"]')?.content).toBe(
      'noindex, follow',
    );
    expect(document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.content).toBe(
      'Page Not Found | ressutti.com',
    );
    expect(
      document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.content,
    ).toBe(
      'The requested page could not be found on ressutti.com. Check the address or continue to the home or projects pages.',
    );
    expect(document.querySelector<HTMLMetaElement>('meta[property="og:image"]')?.content).toBe(
      'https://www.ressutti.com/en-gb/images/seo/pages/wr-logo-frame-gradient-seo-image.webp',
    );
    expect(document.querySelectorAll('meta[property^="og:"]')).toHaveLength(3);
    expect(document.querySelectorAll('meta[name^="twitter:"]')).toHaveLength(0);
    expect(document.querySelector('link[rel="canonical"]')).toBeNull();
    expect(document.querySelectorAll('link[rel="alternate"]')).toHaveLength(0);
    expect(document.getElementById('json-ld')).toBeNull();
  });

  it('should provide semantic, locale-aware recovery navigation', () => {
    const element = fixture.nativeElement as HTMLElement;
    const section = element.querySelector('section');
    const links = Array.from(element.querySelectorAll<HTMLAnchorElement>('nav a'));

    expect(element.querySelectorAll('h1')).toHaveLength(1);
    expect(section?.getAttribute('aria-labelledby')).toBe('not-found-title');
    expect(section?.getAttribute('aria-describedby')).toBe('not-found-description');
    expect(links.map((link) => link.getAttribute('href'))).toEqual(['/', '/projects']);
    expect(links.every((link) => link.hreflang === 'en-GB')).toBe(true);
  });
});
