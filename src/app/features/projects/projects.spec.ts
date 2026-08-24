import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';

import { Projects } from './projects';
import { SeoService } from '../../core/services/seo/seo.service';
import { PROJECTS } from '../../shared/data/projects.data';
import { LOCALES } from '../../shared/i18n/locales';
import { ROUTES } from '../../shared/i18n/routes';

describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;
  const seoService = {
    updateSeo: vi.fn(),
  };

  beforeEach(async () => {
    document.documentElement.lang = LOCALES.enGB;
    seoService.updateSeo.mockReset();

    await TestBed.configureTestingModule({
      imports: [Projects],
      providers: [provideRouter([]), { provide: SeoService, useValue: seoService }],
    }).compileComponents();

    fixture = TestBed.createComponent(Projects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render every project from the catalogue', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('app-project-list-card')).toHaveLength(PROJECTS.length);
    expect(element.querySelectorAll('h1')).toHaveLength(1);
  });

  it('should render a locale-aware contact call to action', () => {
    const link = (fixture.nativeElement as HTMLElement).querySelector<HTMLAnchorElement>(
      '[aria-labelledby="projects-contact-title"] a',
    );

    expect(link?.getAttribute('href')).toBe('/contact');
    expect(link?.hreflang).toBe(LOCALES.enGB);
  });

  it('should publish indexable projects-page SEO', () => {
    expect(seoService.updateSeo).toHaveBeenCalledWith(
      expect.objectContaining({
        indexable: true,
        currentLocale: LOCALES.enGB,
        path: ROUTES.projects,
      }),
    );
  });
});
