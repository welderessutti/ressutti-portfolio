import { TestBed } from '@angular/core/testing';
import { PrerenderFallback, RenderMode, ServerRoutePrerenderWithParams } from '@angular/ssr';

import { serverRoutes } from './app.routes.server';
import { ProjectService } from './core/services/project/project.service';
import { PROJECTS } from './shared/data/projects.data';

describe('server routes', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should prerender every known project slug', async () => {
    const projectRoute = serverRoutes.find(
      (route) => route.path === 'projects/:slug',
    ) as ServerRoutePrerenderWithParams;

    expect(projectRoute?.renderMode).toBe(RenderMode.Prerender);
    expect(projectRoute?.fallback).toBe(PrerenderFallback.Client);

    const params = await TestBed.runInInjectionContext(() => projectRoute.getPrerenderParams());

    expect(params).toEqual(PROJECTS.map((project) => ({ slug: project.slug })));
  });

  it('should delegate prerender parameter discovery to ProjectService', async () => {
    const projects = [PROJECTS[0]];
    const projectService = {
      getAllProjects: vi.fn(() => projects),
    };
    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [{ provide: ProjectService, useValue: projectService }],
    });
    const projectRoute = serverRoutes.find(
      (route) => route.path === 'projects/:slug',
    ) as ServerRoutePrerenderWithParams;

    const params = await TestBed.runInInjectionContext(() => projectRoute.getPrerenderParams());

    expect(projectService.getAllProjects).toHaveBeenCalledOnce();
    expect(params).toEqual([{ slug: PROJECTS[0].slug }]);
  });

  it('should prerender all remaining routes through the wildcard rule', () => {
    expect(serverRoutes.at(-1)).toMatchObject({
      path: '**',
      renderMode: RenderMode.Prerender,
    });
  });
});
