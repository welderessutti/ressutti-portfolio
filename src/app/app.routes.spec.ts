import { routes } from './app.routes';
import { About } from './features/about/about';
import { Contact } from './features/contact/contact';
import { Home } from './features/home/home';
import { NotFound } from './features/not-found/not-found';
import { projectExistsGuard } from './features/projects/guards/project-exists-guard';
import { ProjectDetails } from './features/projects/project-details/project-details';
import { Projects } from './features/projects/projects';
import { projectResolver } from './features/projects/resolvers/project-resolver';

describe('application routes', () => {
  it('should keep the public route order and wildcard fallback stable', () => {
    expect(routes.map((route) => route.path)).toEqual([
      '',
      'projects',
      'projects/:slug',
      'about',
      'contact',
      '404',
      '**',
    ]);
  });

  it('should protect and resolve project details before loading the page', () => {
    const projectDetailsRoute = routes.find((route) => route.path === 'projects/:slug');

    expect(projectDetailsRoute?.canMatch).toContain(projectExistsGuard);
    expect(projectDetailsRoute?.resolve?.['project']).toBe(projectResolver);
    expect(projectDetailsRoute?.loadComponent).toBeTypeOf('function');
  });

  it('should lazy-load every page route', () => {
    expect(routes.every((route) => typeof route.loadComponent === 'function')).toBe(true);
  });

  it('should map every public path to the intended standalone component', async () => {
    const loadedComponents = await Promise.all(
      routes.map((route) => route.loadComponent?.()).map((component) => Promise.resolve(component)),
    );

    expect(loadedComponents).toEqual([
      Home,
      Projects,
      ProjectDetails,
      About,
      Contact,
      NotFound,
      NotFound,
    ]);
  });
});
