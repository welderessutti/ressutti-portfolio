import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';

import { About } from './about';
import { SeoService } from '../../core/services/seo/seo.service';
import { LOCALES } from '../../shared/i18n/locales';
import { ROUTES } from '../../shared/i18n/routes';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;
  const seoService = {
    updateSeo: vi.fn(),
  };

  beforeEach(async () => {
    document.documentElement.lang = LOCALES.enGB;
    seoService.updateSeo.mockReset();

    await TestBed.configureTestingModule({
      imports: [About],
      providers: [provideRouter([]), { provide: SeoService, useValue: seoService }],
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one page heading and the main sections', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('h1')).toHaveLength(1);
    expect(element.querySelectorAll('article > section')).toHaveLength(5);
  });

  it('should render four principles and four capability groups', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('[aria-labelledby="about-principles-title"] li')).toHaveLength(
      4,
    );
    expect(
      element.querySelectorAll(
        '[aria-labelledby="about-capabilities-title"] > div > div > section',
      ),
    ).toHaveLength(4);
  });

  it('should render locale-aware calls to action', () => {
    const links = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLAnchorElement>(
        '[aria-labelledby="about-cta-title"] a',
      ),
    );

    expect(links.map((link) => link.getAttribute('href'))).toEqual(['/projects', '/contact']);
    expect(links.every((link) => link.hreflang === LOCALES.enGB)).toBe(true);
  });

  it('should publish indexable about-page SEO', () => {
    expect(seoService.updateSeo).toHaveBeenCalledWith(
      expect.objectContaining({
        indexable: true,
        currentLocale: LOCALES.enGB,
        path: ROUTES.about,
      }),
    );
  });
});
