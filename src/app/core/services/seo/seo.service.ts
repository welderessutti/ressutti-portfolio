import { ROUTES, RouteValue } from './../../../shared/i18n/routes';
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
  private readonly SITE_NAME = 'Ressutti.dev';
  private readonly BASE_URL = 'https://www.ressutti.com';

  private get currentLocale(): Locale {
    return this.document.documentElement.lang as Locale;
  }

  private buildUrl(locale: Locale, path: string): string {
    return `${this.BASE_URL}/${locale.toLowerCase()}/${path}`;
  }

  private buildImageUrl(imagePath: string): string {
    return `${this.BASE_URL}${imagePath}`;
  }

  private buildJsonLd(seo: Seo): object {
    return {
      '@context': 'https://schema.org',
      '@type': seo.jsonLdType,

      name: seo.title,
      description: seo.description,
      url: this.buildUrl(this.currentLocale, seo.path[this.currentLocale]),

      inLanguage: this.currentLocale,

      image: this.buildImageUrl(seo.image),

      isPartOf: {
        '@type': 'WebSite',
        name: this.SITE_NAME,
        url: this.BASE_URL,
      },

      publisher: {
        '@type': 'Person',
        name: 'Welder Ressutti',
        url: this.BASE_URL,
      },
    };
  }

  private toOgLocale(locale: Locale): string {
    return locale.replace('-', '_');
  }

  private setOgLocaleAlternates() {
    this.document
      .querySelectorAll('meta[property="og:locale:alternate"]')
      .forEach((meta) => meta.remove());

    Object.values(LOCALES)
      .filter((locale) => locale !== this.currentLocale)
      .forEach((locale) => {
        this.meta.addTag({ property: 'og:locale:alternate', content: this.toOgLocale(locale) });
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

  private updateAlternateLinks(path: RouteValue) {
    const alternates = [
      {
        hreflang: LOCALES.enGB,
        href: this.buildUrl(LOCALES.enGB, path[LOCALES.enGB]),
      },
      {
        hreflang: LOCALES.ptBR,
        href: this.buildUrl(LOCALES.ptBR, path[LOCALES.ptBR]),
      },
      {
        hreflang: 'x-default',
        href: this.buildUrl(LOCALES.enGB, path[LOCALES.enGB]),
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

  private updateJsonLd(seo: Seo) {
    const id = 'json-ld';

    let script = this.document.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
      script = this.document.createElement('script');

      script.id = id;
      script.type = 'application/ld+json';

      this.document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(this.buildJsonLd(seo));
  }

  public updateSeo(seo: Seo) {
    this.title.setTitle(seo.title);
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ property: 'og:site_name', content: this.SITE_NAME });
    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:image', content: this.buildImageUrl(seo.image) });
    this.meta.updateTag({ property: 'og:image:alt', content: seo.imageAlt });
    this.meta.updateTag({ property: 'og:type', content: seo.openGraphType });
    this.meta.updateTag({
      property: 'og:url',
      content: this.buildUrl(this.currentLocale, seo.path[this.currentLocale]),
    });
    this.meta.updateTag({ property: 'og:locale', content: this.toOgLocale(this.currentLocale) });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: seo.title });
    this.meta.updateTag({ name: 'twitter:description', content: seo.description });
    this.meta.updateTag({ name: 'twitter:image', content: this.buildImageUrl(seo.image) });
    this.meta.updateTag({ name: 'twitter:image:alt', content: seo.imageAlt });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
    this.setOgLocaleAlternates();
    this.setCanonical(seo.path[this.currentLocale]);
    this.updateAlternateLinks(seo.path);
    this.updateJsonLd(seo);
  }
}
