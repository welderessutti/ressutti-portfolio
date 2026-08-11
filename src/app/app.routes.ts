import { Routes } from '@angular/router';
import { projectExistsGuard } from './features/projects/guards/project-exists-guard';
import { projectResolver } from './features/projects/resolvers/project-resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: $localize`:@@route.projects.path:projects`,
    loadComponent: () => import('./features/projects/projects').then((m) => m.Projects),
  },
  {
    path: `${$localize`:@@route.projects.path:projects`}/:slug`,
    canMatch: [projectExistsGuard],
    resolve: {
      project: projectResolver,
    },
    loadComponent: () =>
      import('./features/projects/project-details/project-details').then((m) => m.ProjectDetails),
  },
  {
    path: $localize`:@@route.about.path:about`,
    loadComponent: () => import('./features/about/about').then((m) => m.About),
  },
  {
    path: $localize`:@@route.contact.path:contact`,
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
  },
  {
    path: '404',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
  },
  {
    path: '**',
    loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
  },
];
