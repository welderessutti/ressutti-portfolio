import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { afterAll, beforeAll, vi } from 'vitest';

import { ProjectDetails } from './project-details';
import { Project } from '../../../shared/models/project.model';

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
  featured: false,
  category: 'Web application',
  type: 'Website',
  role: 'Developer',
  summary: 'A focused project summary.',
  outcome: 'A focused outcome.',
  status: 'Completed',
  completed: true,
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

  beforeAll(() => {
    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
  });

  afterAll(() => {
    vi.unstubAllGlobals();
  });

  beforeEach(async () => {
    routeData = { project: MINIMAL_PROJECT };

    await TestBed.configureTestingModule({
      imports: [ProjectDetails],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { data: routeData } },
        },
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
});
