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
      path: '',
      locale: this.currentLocale,
    },
    {
      id: 'projects',
      label: $localize`:@@nav.projects.label:Projects`,
      path: $localize`:@@nav.projects.path:projects`,
      locale: this.currentLocale,
    },
    {
      id: 'about',
      label: $localize`:@@nav.about.label:About`,
      path: $localize`:@@nav.about.path:about`,
      locale: this.currentLocale,
    },
    {
      id: 'contact',
      label: $localize`:@@nav.contact.label:Contact`,
      path: $localize`:@@nav.contact.path:contact`,
      locale: this.currentLocale,
    },
  ];
}
