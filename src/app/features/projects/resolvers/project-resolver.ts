import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Project } from '../../../shared/models/project.model';
import { ProjectService } from '../../../core/services/project/project.service';

export const projectResolver: ResolveFn<Project> = (route, state) => {
  const projectService = inject(ProjectService);

  const slug = route.paramMap.get('slug')!;

  return projectService.getProjectBySlug(slug)!;
};
