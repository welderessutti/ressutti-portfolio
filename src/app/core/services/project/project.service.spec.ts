import { TestBed } from '@angular/core/testing';

import { ProjectService } from './project.service';
import { PROJECTS } from '../../../shared/data/projects.data';

describe('ProjectService', () => {
  let service: ProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the complete project collection without cloning it', () => {
    expect(service.getAllProjects()).toBe(PROJECTS);
  });

  it('should find projects by id and slug', () => {
    const project = PROJECTS[0];

    expect(service.getProjectById(project.id)).toBe(project);
    expect(service.getProjectBySlug(project.slug)).toBe(project);
  });

  it('should return undefined for unknown project identifiers', () => {
    expect(service.getProjectById('unknown-id')).toBeUndefined();
    expect(service.getProjectBySlug('unknown-slug')).toBeUndefined();
  });

  it('should return only featured projects', () => {
    expect(service.getFeaturedProjects()).toEqual(PROJECTS.filter((project) => project.isFeatured));
  });

  it('should report whether a project slug exists', () => {
    expect(service.existsProjectBySlug(PROJECTS[0].slug)).toBe(true);
    expect(service.existsProjectBySlug('unknown-slug')).toBe(false);
  });
});
