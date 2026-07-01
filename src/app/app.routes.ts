import { Routes } from '@angular/router';

import { Home } from './features/home/home';
import { Projects } from './features/projects/projects';
import { About } from './features/about/about';
import { Contact } from './features/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: $localize`:@@route.projects.path:projects`,
    component: Projects,
  },
  {
    path: $localize`:@@route.about.path:about`,
    component: About,
  },
  {
    path: $localize`:@@route.contact.path:contact`,
    component: Contact,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
