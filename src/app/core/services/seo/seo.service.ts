import { RouteValue } from './../../../shared/i18n/routes';
import { Injectable, inject, DOCUMENT } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { IndexableSeo, NonIndexableSeo, Seo } from '../../../shared/models/seo.model';
import { Locale, LOCALES } from '../../../shared/i18n/locales';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly SITE_NAME = 'ressutti.com';
  private readonly BASE_URL = 'https://www.ressutti.com';
  private readonly INDEXABLE_ROBOTS = 'index, follow, max-image-preview:large';
  private readonly NON_INDEXABLE_ROBOTS = 'noindex, follow';

  private buildPageUrl(locale: Locale, path: string, slug?: string): string {
    return `${this.BASE_URL}/${locale.toLowerCase()}/${path}${slug ? `/${slug}` : ''}`;
  }

  private buildImageUrl(locale: Locale, image: string): string {
    return `${this.BASE_URL}/${locale.toLowerCase()}/${image}`;
  }

  private updateTitle(title: string) {
    this.title.setTitle(title);
  }

  private buildJsonLd(seo: IndexableSeo): object {
    return {
      '@context': 'https://schema.org',
      '@type': seo.jsonLdType,

      name: seo.title,
      description: seo.description,
      url: this.buildPageUrl(seo.currentLocale, seo.path[seo.currentLocale], seo.slug),

      inLanguage: seo.currentLocale,

      image: this.buildImageUrl(seo.currentLocale, seo.image),

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

  private setOgLocaleAlternates(currentLocale: Locale) {
    this.document
      .querySelectorAll('meta[property="og:locale:alternate"]')
      .forEach((meta) => meta.remove());

    Object.values(LOCALES)
      .filter((locale) => locale !== currentLocale)
      .forEach((locale) => {
        this.meta.addTag({ property: 'og:locale:alternate', content: this.toOgLocale(locale) });
      });
  }

  private setCanonical(seo: IndexableSeo) {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute(
      'href',
      this.buildPageUrl(seo.currentLocale, seo.path[seo.currentLocale], seo.slug),
    );
  }

  private updateAlternateLinks(path: RouteValue, slug?: string) {
    const alternates = [
      {
        hreflang: LOCALES.enGB,
        href: this.buildPageUrl(LOCALES.enGB, path[LOCALES.enGB], slug),
      },
      {
        hreflang: LOCALES.ptBR,
        href: this.buildPageUrl(LOCALES.ptBR, path[LOCALES.ptBR], slug),
      },
      {
        hreflang: 'x-default',
        href: this.buildPageUrl(LOCALES.enGB, path[LOCALES.enGB], slug),
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

  private updateJsonLd(seo: IndexableSeo) {
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

  private updateOpenGraphPreview(seo: Seo) {
    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({
      property: 'og:image',
      content: this.buildImageUrl(seo.currentLocale, seo.image),
    });
  }

  private removeIndexableMetadata() {
    this.document
      .querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]')
      .forEach((meta) => meta.remove());

    this.document
      .querySelectorAll('link[rel="canonical"], link[rel="alternate"]')
      .forEach((link) => link.remove());

    this.document.getElementById('json-ld')?.remove();
  }

  private updateIndexableSeo(seo: IndexableSeo) {
    this.updateOpenGraphPreview(seo);
    this.meta.updateTag({ property: 'og:site_name', content: this.SITE_NAME });
    this.meta.updateTag({ property: 'og:image:alt', content: seo.imageAlt });
    this.meta.updateTag({ property: 'og:type', content: seo.openGraphType });
    this.meta.updateTag({
      property: 'og:url',
      content: this.buildPageUrl(seo.currentLocale, seo.path[seo.currentLocale], seo.slug),
    });
    this.meta.updateTag({ property: 'og:locale', content: this.toOgLocale(seo.currentLocale) });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: seo.title });
    this.meta.updateTag({ name: 'twitter:description', content: seo.description });
    this.meta.updateTag({
      name: 'twitter:image',
      content: this.buildImageUrl(seo.currentLocale, seo.image),
    });
    this.meta.updateTag({ name: 'twitter:image:alt', content: seo.imageAlt });
    this.meta.updateTag({ name: 'robots', content: this.INDEXABLE_ROBOTS });
    this.setOgLocaleAlternates(seo.currentLocale);
    this.setCanonical(seo);
    this.updateAlternateLinks(seo.path, seo.slug);
    this.updateJsonLd(seo);
  }

  private updateNonIndexableSeo(seo: NonIndexableSeo) {
    this.removeIndexableMetadata();
    this.updateOpenGraphPreview(seo);
    this.meta.updateTag({ name: 'robots', content: this.NON_INDEXABLE_ROBOTS });
  }

  public updateSeo(seo: Seo) {
    this.updateTitle(seo.title);
    this.meta.updateTag({ name: 'description', content: seo.description });

    if (seo.indexable) {
      this.updateIndexableSeo(seo);
      return;
    }

    this.updateNonIndexableSeo(seo);
  }
}
