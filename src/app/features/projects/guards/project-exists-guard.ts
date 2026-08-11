import { CanMatchFn } from '@angular/router';
import { inject } from '@angular/core';
import { ProjectService } from '../../../core/services/project/project.service';

export const projectExistsGuard: CanMatchFn = (route, segments) => {
  const projectService = inject(ProjectService);

  const slug = segments[1]?.path;

  if (!slug) {
    return false;
  }

  return projectService.existsProjectBySlug(slug);
};
