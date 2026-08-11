import { ComponentFixture, TestBed } from '@angular/core/testing';
import { afterAll, beforeAll, vi } from 'vitest';

import { ProjectDetails, ProjectDetailsData } from './project-details';

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

const MINIMAL_PROJECT: ProjectDetailsData = {
  id: 'minimal-project',
  name: 'Minimal project',
  category: 'Web application',
  summary: 'A focused project summary.',
  status: 'Completed',
  technologies: ['Angular'],
  heroImage: {
    src: '/images/projects/1785012012152.png',
    alt: 'Minimal project interface',
    width: 1600,
    height: 900,
  },
  overview: {
    context: 'Project context.',
    problem: 'Project problem.',
    solution: 'Project solution.',
    facts: [{ label: 'Role', value: 'Developer' }],
  },
};

describe('ProjectDetails', () => {
  let component: ProjectDetails;
  let fixture: ComponentFixture<ProjectDetails>;

  beforeAll(() => {
    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);
  });

  afterAll(() => {
    vi.unstubAllGlobals();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the supplied project data', () => {
    fixture.componentRef.setInput('project', MINIMAL_PROJECT);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('h1')?.textContent).toContain('Minimal project');
    expect(element.querySelector('#overview')).toBeTruthy();
  });

  it('does not render optional sections without content', () => {
    fixture.componentRef.setInput('project', MINIMAL_PROJECT);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('#features')).toBeNull();
    expect(element.querySelector('#architecture')).toBeNull();
    expect(element.querySelector('#engineering')).toBeNull();
    expect(element.querySelector('#gallery')).toBeNull();
  });

  it('renders external actions only when URLs are available', () => {
    fixture.componentRef.setInput('project', {
      ...MINIMAL_PROJECT,
      liveUrl: 'https://example.com/demo',
      sourceUrl: 'https://example.com/source',
    } satisfies ProjectDetailsData);
    fixture.detectChanges();

    const externalLinks = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLAnchorElement>(
        'a[target="_blank"]',
      ),
    );

    expect(externalLinks).toHaveLength(2);
    expect(externalLinks.every((link) => link.rel === 'noopener noreferrer')).toBe(true);
  });
});
