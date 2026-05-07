import { Injectable } from '@angular/core';
import { Nav } from '../../../shared/models/nav.model';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  public readonly navs: Nav[] = [
    { id: 'home', label: $localize`:@@nav.home.label:Home`, path: $localize`:@@nav.home.path:` },
    {
      id: 'projects',
      label: $localize`:@@nav.projects.label:Projects`,
      path: $localize`:@@nav.projects.path:projects`,
    },
    {
      id: 'about',
      label: $localize`:@@nav.about.label:About`,
      path: $localize`:@@nav.about.path:about`,
    },
    {
      id: 'contact',
      label: $localize`:@@nav.contact.label:Contact`,
      path: $localize`:@@nav.contact.path:contact`,
    },
  ];
}
