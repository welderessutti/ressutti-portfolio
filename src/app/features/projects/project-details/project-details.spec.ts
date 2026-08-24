import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { afterAll, beforeAll, vi } from 'vitest';

import { ProjectDetails } from './project-details';
import { Project } from '../../../shared/models/project.model';
import { SeoService } from '../../../core/services/seo/seo.service';
import { PROJECTS } from '../../../shared/data/projects.data';
import { LOCALES } from '../../../shared/i18n/locales';
import { ROUTES } from '../../../shared/i18n/routes';

class IntersectionObserverMock implements IntersectionObserver {
  public readonly root = null;
  public readonly rootMargin = '0px';
  public readonly thresholds: readonly number[] = [];

  public disconnect(): void {}

  public observe(): void {}

  public takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  public unobserve(): void {}
}

const PROJECT_IMAGE = {
  src: '/images/projects/1785012012152.png',
  alt: 'Minimal project interface',
  width: 1600,
  height: 900,
} as const;

const MINIMAL_PROJECT: Project = {
  id: 'minimal-project',
  slug: 'minimal-project',
  name: 'Minimal project',
  title: 'Minimal project',
  subtitle: 'Minimal project subtitle.',
  shortDescription: 'A focused project summary.',
  description: 'A focused project description.',
  isFeatured: false,
  category: 'Web application',
  type: 'Website',
  role: 'Developer',
  summary: 'A focused project summary.',
  outcome: 'A focused outcome.',
  status: 'Completed',
  isCompleted: true,
  timeline: 'One month',
  year: { startYear: 2026 },
  technologies: [],
  coverImage: PROJECT_IMAGE,
  seoImage: PROJECT_IMAGE,
  heroImage: PROJECT_IMAGE,
  overview: {
    context: 'Project context.',
    problem: 'Project problem.',
    solution: 'Project solution.',
  },
};

describe('ProjectDetails', () => {
  let component: ProjectDetails;
  let fixture: ComponentFixture<ProjectDetails>;
  let routeData: { project: Project };
  const seoService = {
    updateSeo: vi.fn(),
  };

  beforeAll(() => {
    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
  });

  afterAll(() => {
    vi.unstubAllGlobals();
  });

  beforeEach(async () => {
    document.documentElement.lang = LOCALES.enGB;
    seoService.updateSeo.mockReset();
    routeData = { project: MINIMAL_PROJECT };

    await TestBed.configureTestingModule({
      imports: [ProjectDetails],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { data: routeData } },
        },
        { provide: SeoService, useValue: seoService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the resolved project data', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('h1')?.textContent).toContain('Minimal project');
    expect(element.querySelector('#overview')).toBeTruthy();
  });

  it('publishes project-specific SEO using the resolved slug', () => {
    expect(seoService.updateSeo).toHaveBeenCalledWith(
      expect.objectContaining({
        indexable: true,
        title: 'Minimal project | Web application | Welder Ressutti',
        description: MINIMAL_PROJECT.description,
        currentLocale: LOCALES.enGB,
        path: ROUTES.projects,
        slug: MINIMAL_PROJECT.slug,
        image: MINIMAL_PROJECT.seoImage.src,
        imageAlt: MINIMAL_PROJECT.seoImage.alt,
      }),
    );
  });

  it('does not render optional sections without content', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('#features')).toBeNull();
    expect(element.querySelector('#architecture')).toBeNull();
    expect(element.querySelector('#engineering')).toBeNull();
    expect(element.querySelector('#gallery')).toBeNull();
  });

  it('renders external actions only when URLs are available', () => {
    routeData.project = {
      ...MINIMAL_PROJECT,
      liveUrl: 'https://example.com/demo',
      repositoryUrl: 'https://example.com/source',
    };

    const externalFixture = TestBed.createComponent(ProjectDetails);
    externalFixture.detectChanges();

    const externalLinks = Array.from(
      (externalFixture.nativeElement as HTMLElement).querySelectorAll<HTMLAnchorElement>(
        'a[target="_blank"]',
      ),
    );

    expect(externalLinks).toHaveLength(2);
    expect(externalLinks.every((link) => link.rel === 'noopener noreferrer')).toBe(true);
  });

  it('renders all optional content groups supplied by a complete project', () => {
    routeData.project = PROJECTS[0];

    const completeFixture = TestBed.createComponent(ProjectDetails);
    completeFixture.detectChanges();
    const element = completeFixture.nativeElement as HTMLElement;

    expect(element.querySelector('#features')).not.toBeNull();
    expect(element.querySelector('#architecture')).not.toBeNull();
    expect(element.querySelector('#engineering')).not.toBeNull();
    expect(element.querySelector('#gallery')).not.toBeNull();
  });
});
