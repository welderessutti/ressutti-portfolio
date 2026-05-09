import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { Projects } from './features/projects/projects';
import { About } from './features/about/about';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
  {
    path: 'en-gb',
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'projects',
        component: Projects,
      },
      {
        path: 'about',
        component: About,
      },
      {
        path: 'contact',
        component: Contact,
      },
    ],
  },

  {
    path: 'pt-br',
    children: [
      {
        path: '',
        component: Home,
      },
      {
        path: 'projetos',
        component: Projects,
      },
      {
        path: 'sobre',
        component: About,
      },
      {
        path: 'contato',
        component: Contact,
      },
    ],
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'en-gb',
  },

  {
    path: '**',
    redirectTo: 'en-gb',
  },
];
