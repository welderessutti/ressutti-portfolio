import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Projects } from './projects';
import { PROJECTS } from '../../../../shared/data/projects.data';
import { LOCALES } from '../../../../shared/i18n/locales';
import { ProjectService } from '../../../../core/services/project/project.service';
import { vi } from 'vitest';

describe('Projects', () => {
  let component: Projects;
  let fixture: ComponentFixture<Projects>;
  const featuredProjects = PROJECTS.filter((project) => project.isFeatured);
  const projectService = {
    getFeaturedProjects: vi.fn(() => featuredProjects),
  };

  beforeEach(async () => {
    document.documentElement.lang = LOCALES.enGB;
    projectService.getFeaturedProjects.mockClear();

    await TestBed.configureTestingModule({
      imports: [Projects],
      providers: [provideRouter([]), { provide: ProjectService, useValue: projectService }],
    }).compileComponents();

    fixture = TestBed.createComponent(Projects);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the configured project cards and localised listing link', () => {
    const element = fixture.nativeElement as HTMLElement;
    const listingLink = Array.from(element.querySelectorAll<HTMLAnchorElement>('a')).at(-1);

    expect(element.querySelectorAll('app-project-card')).toHaveLength(featuredProjects.length);
    expect(projectService.getFeaturedProjects).toHaveBeenCalledOnce();
    expect(listingLink?.getAttribute('href')).toBe('/projects');
    expect(listingLink?.hreflang).toBe(LOCALES.enGB);
  });
});
