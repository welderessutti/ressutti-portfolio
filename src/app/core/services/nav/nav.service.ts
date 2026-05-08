import { Injectable, DOCUMENT, inject } from '@angular/core';
import { Nav } from '../../../shared/models/nav.model';
import { Locale } from '../../../shared/i18n/locales';

@Injectable({
  providedIn: 'root',
})
export class NavService {
  private readonly document = inject(DOCUMENT);

  private get currentLocale(): Locale {
    return this.document.documentElement.lang as Locale;
  }

  public readonly navs: Nav[] = [
    {
      id: 'home',
      label: 'Home',
      locale: this.currentLocale,
      path: '/',
    },
    {
      id: 'projects',
      label: $localize`:@@nav.projects.label:Projects`,
      locale: this.currentLocale,
      path: $localize`:@@nav.projects.path:/projects`,
    },
    {
      id: 'about',
      label: $localize`:@@nav.about.label:About`,
      locale: this.currentLocale,
      path: $localize`:@@nav.about.path:/about`,
    },
    {
      id: 'contact',
      label: $localize`:@@nav.contact.label:Contact`,
      locale: this.currentLocale,
      path: $localize`:@@nav.contact.path:/contact`,
    },
  ];
}
