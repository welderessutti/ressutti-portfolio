import { Injectable, inject, PLATFORM_ID, DOCUMENT } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Seo } from '../../../shared/models/seo.model';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  private get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  private updateAlternateLinks(url: string) {
    const alternates = [
      {
        hreflang: 'en',
        href: `https://www.ressutti.com/en-GB${url}`,
      },
      {
        hreflang: 'pt',
        href: `https://www.ressutti.com/pt-BR${url}`,
      },
      {
        hreflang: 'x-default',
        href: `https://www.ressutti.com/en-GB${url}`,
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

  private setCanonical(url: string) {
    if (!this.isBrowser) return;

    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }

  public updateSeo(seo: Seo) {
    this.title.setTitle(seo.title);
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:image', content: seo.image });
    this.meta.updateTag({ property: 'og:url', content: seo.url });
    this.updateAlternateLinks(seo.url);
    this.setCanonical(seo.url);
  }
}
// verificar as url que estao sendo passadas para o og:url, canonical e alternate links, para garantir que estão corretas e consistentes.
