import { inject } from '@angular/core';
import { ProjectService } from './core/services/project/project.service';
import { RenderMode, ServerRoute, PrerenderFallback } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: `${$localize`:@@route.projects.path:projects`}/:slug`,
    renderMode: RenderMode.Prerender,

    async getPrerenderParams() {
      const projectService = inject(ProjectService);

      return projectService.getAllProjects().map((project) => ({
        slug: project.slug,
      }));
    },

    fallback: PrerenderFallback.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
