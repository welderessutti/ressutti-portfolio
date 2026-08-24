import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  convertToParamMap,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { vi } from 'vitest';

import { projectResolver } from './project-resolver';
import { Project } from '../../../shared/models/project.model';
import { ProjectService } from '../../../core/services/project/project.service';
import { PROJECTS } from '../../../shared/data/projects.data';

describe('projectResolver', () => {
  const projectService = {
    getProjectBySlug: vi.fn<(slug: string) => Project | undefined>(),
  };
  const executeResolver: ResolveFn<Project> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => projectResolver(...resolverParameters));

  beforeEach(() => {
    projectService.getProjectBySlug.mockReset();
    TestBed.configureTestingModule({
      providers: [{ provide: ProjectService, useValue: projectService }],
    });
  });

  it('should resolve the project selected by the route slug', () => {
    const project = PROJECTS[0];
    projectService.getProjectBySlug.mockReturnValue(project);
    const route = {
      paramMap: convertToParamMap({ slug: project.slug }),
    } as ActivatedRouteSnapshot;

    const result = executeResolver(route, {} as RouterStateSnapshot);

    expect(result).toBe(project);
    expect(projectService.getProjectBySlug).toHaveBeenCalledWith(project.slug);
  });
});
