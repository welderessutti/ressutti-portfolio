import { Routes } from '@angular/router';

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
    path: $localize`:@@route.about.path:about`,
    loadComponent: () => import('./features/about/about').then((m) => m.About),
  },
  {
    path: $localize`:@@route.contact.path:contact`,
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
