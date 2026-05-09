import { Injectable, inject, DOCUMENT } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Seo } from '../../../shared/models/seo.model';
import { Locale, LOCALES } from '../../../shared/i18n/locales';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly BASE_URL: string = 'https://www.ressutti.com';

  private get currentLocale(): Locale {
    return this.document.documentElement.lang as Locale;
  }

  private buildUrl(locale: Locale, path: string): string {
    return `${this.BASE_URL}/${locale.toLowerCase()}${path}`;
  }

  private updateAlternateLinks(path: string) {
    const alternates = [
      {
        hreflang: LOCALES.enGB,
        href: this.buildUrl(LOCALES.enGB, path),
      },
      {
        hreflang: LOCALES.ptBR,
        href: this.buildUrl(LOCALES.ptBR, path),
      },
      {
        hreflang: 'x-default',
        href: this.buildUrl(LOCALES.enGB, path),
      },
    ];

    this.document.querySelectorAll('link[rel="alternate"]').forEach((link) => link.remove());

    alternates.forEach((alt) => {
      const link = this.document.createElement('link');

      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', alt.hreflang);
      link.setAttribute('href', alt.href);

      this.document.head.appendChild(link);
    });
  }

  private setCanonical(path: string) {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', this.buildUrl(this.currentLocale, path));
  }

  public updateSeo(seo: Seo) {
    this.title.setTitle(seo.title);
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:image', content: seo.image });
    this.meta.updateTag({
      property: 'og:url',
      content: this.buildUrl(this.currentLocale, seo.path),
    });
    this.updateAlternateLinks(seo.path);
    this.setCanonical(seo.path);
  }
}
