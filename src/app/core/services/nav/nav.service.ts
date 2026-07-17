import { Injectable, DOCUMENT, inject } from '@angular/core';
import { Nav } from '../../../shared/models/nav.model';
import { Locale } from '../../../shared/i18n/locales';
import { ROUTES } from '../../../shared/i18n/routes';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  private readonly document = inject(DOCUMENT);
  private readonly currentLocale = this.document.documentElement.lang as Locale;

  public readonly navs: Nav[] = [
    {
      id: 'home',
      label: 'Home',
      path: ROUTES.home[this.currentLocale],
      locale: this.currentLocale,
    },
    {
      id: 'projects',
      label: $localize`:@@nav.projects.label:Projects`,
      path: ROUTES.projects[this.currentLocale],
      locale: this.currentLocale,
    },
    {
      id: 'about',
      label: $localize`:@@nav.about.label:About`,
      path: ROUTES.about[this.currentLocale],
      locale: this.currentLocale,
    },
    {
      id: 'contact',
      label: $localize`:@@nav.contact.label:Contact`,
      path: ROUTES.contact[this.currentLocale],
      locale: this.currentLocale,
    },
  ];
}
