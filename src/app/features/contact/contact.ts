import { Component, DOCUMENT, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo/seo.service';
import { ROUTES } from '../../shared/i18n/routes';
import { ContactService } from '../../core/services/contact/contact.service';
import { Svg } from '../../shared/icons/svg/svg';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';
import { Locale } from '../../shared/i18n/locales';

@Component({
  selector: 'app-contact',
  imports: [Svg, RevealOnScroll],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly document = inject(DOCUMENT);
  private readonly seo = inject(SeoService);
  private readonly contact = inject(ContactService);
  protected readonly contacts = this.contact.contacts;
  protected readonly cvPath = this.contact.cvPath;

  private get currentLocale(): Locale {
    return this.document.documentElement.lang as Locale;
  }

  public constructor() {
    this.seo.updateSeo({
      title: $localize`:@@contact.seo.title:Contact | Welder Ressutti | Full-Stack Developer`,
      description: $localize`:@@contact.seo.description:Contact Welder Ressutti about Angular and Spring development opportunities, full-stack web projects or professional collaboration.`,
      currentLocale: this.currentLocale,
      path: ROUTES.contact,
      image: 'images/seo/pages/wr-logo-frame-gradient-seo-image.webp',
      imageAlt: $localize`:@@contact.seo.imageAlt:WR logo for Welder Ressutti — ressutti.com`,
      openGraphType: 'website',
      jsonLdType: 'WebPage',
    });
  }
}
