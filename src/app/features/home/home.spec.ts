import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';

import { Home } from './home';
import { SeoService } from '../../core/services/seo/seo.service';
import { LOCALES } from '../../shared/i18n/locales';
import { ROUTES } from '../../shared/i18n/routes';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;
  const seoService = {
    updateSeo: vi.fn(),
  };

  beforeEach(async () => {
    document.documentElement.lang = LOCALES.enGB;
    seoService.updateSeo.mockReset();

    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [provideRouter([]), { provide: SeoService, useValue: seoService }],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should compose the four home-page sections', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('app-hero')).not.toBeNull();
    expect(element.querySelector('app-projects')).not.toBeNull();
    expect(element.querySelector('app-stacks')).not.toBeNull();
    expect(element.querySelector('app-about')).not.toBeNull();
  });

  it('should publish indexable home-page SEO for the rendered locale', () => {
    expect(seoService.updateSeo).toHaveBeenCalledOnce();
    expect(seoService.updateSeo).toHaveBeenCalledWith(
      expect.objectContaining({
        indexable: true,
        currentLocale: LOCALES.enGB,
        path: ROUTES.home,
        openGraphType: 'website',
        jsonLdType: 'WebPage',
      }),
    );
  });
});
