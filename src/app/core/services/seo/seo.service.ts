import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title, Meta } from '@angular/platform-browser';
import { Seo } from '../../../shared/models/seo.model';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  private get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  private setCanonical(url: string) {
    if (!this.isBrowser) return;

    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");

    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
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
    this.setCanonical(seo.url);
  }
}
