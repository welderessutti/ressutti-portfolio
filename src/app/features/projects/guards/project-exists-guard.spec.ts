import { TestBed } from '@angular/core/testing';
import { CanMatchFn, Route, UrlSegment } from '@angular/router';
import { vi } from 'vitest';

import { projectExistsGuard } from './project-exists-guard';
import { ProjectService } from '../../../core/services/project/project.service';

describe('projectExistsGuard', () => {
  const projectService = {
    existsProjectBySlug: vi.fn<(slug: string) => boolean>(),
  };
  const executeGuard: CanMatchFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => projectExistsGuard(...guardParameters));

  beforeEach(() => {
    projectService.existsProjectBySlug.mockReset();
    TestBed.configureTestingModule({
      providers: [{ provide: ProjectService, useValue: projectService }],
    });
  });

  it('should allow a project route when its slug exists', () => {
    projectService.existsProjectBySlug.mockReturnValue(true);

    const result = executeGuard({} as Route, [
      new UrlSegment('projects', {}),
      new UrlSegment('glicare', {}),
    ]);

    expect(result).toBe(true);
    expect(projectService.existsProjectBySlug).toHaveBeenCalledWith('glicare');
  });

  it('should reject a project route when its slug does not exist', () => {
    projectService.existsProjectBySlug.mockReturnValue(false);

    const result = executeGuard({} as Route, [
      new UrlSegment('projects', {}),
      new UrlSegment('unknown', {}),
    ]);

    expect(result).toBe(false);
  });

  it('should reject a route without a slug without querying the service', () => {
    const result = executeGuard({} as Route, [new UrlSegment('projects', {})]);

    expect(result).toBe(false);
    expect(projectService.existsProjectBySlug).not.toHaveBeenCalled();
  });
});
