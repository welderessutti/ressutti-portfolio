import { Component, inject, LOCALE_ID } from '@angular/core';
import { SeoService } from '../../core/services/seo/seo.service';
import { CONTACT_DETAILS } from '../../shared/data/contact-details.data';
import { DEFAULT_LOCALE, Locale, SUPPORTED_LOCALES } from '../../shared/i18n/locales';
import { ROUTES } from '../../shared/i18n/routes';

interface ContactChannel {
  readonly id: 'linkedin' | 'github' | 'whatsapp';
  readonly label: 'LinkedIn' | 'GitHub' | 'WhatsApp';
  readonly accessibleLabel: string;
  readonly url: `https://${string}`;
}

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly localeId = inject(LOCALE_ID);
  private readonly seo = inject(SeoService);

  protected readonly contact = CONTACT_DETAILS;
  protected readonly currentLocale = this.resolveCurrentLocale();
  protected readonly cvPath = this.contact.cvPath[this.currentLocale];
  protected readonly channels: readonly ContactChannel[] = [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      accessibleLabel: $localize`:@@contact.channels.linkedin.label:Open LinkedIn in a new tab`,
      url: this.contact.linkedinUrl,
    },
    {
      id: 'github',
      label: 'GitHub',
      accessibleLabel: $localize`:@@contact.channels.github.label:Open GitHub in a new tab`,
      url: this.contact.githubUrl,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      accessibleLabel: $localize`:@@contact.channels.whatsapp.label:Open WhatsApp in a new tab`,
      url: this.contact.whatsappUrl,
    },
  ];

  public constructor() {
    this.seo.updateSeo({
      title: $localize`:@@contact.seo.title:Contact Welder Ressutti | Ressutti.dev`,
      description: $localize`:@@contact.seo.description:Contact Welder Ressutti about software development opportunities, projects, collaboration or professional networking.`,
      image: '/favicon.ico',
      imageAlt: $localize`:@@contact.seo.imageAlt:Ressutti.dev portfolio logo.`,
      path: ROUTES.contact,
      openGraphType: 'website',
      jsonLdType: 'ContactPage',
    });
  }

  private resolveCurrentLocale(): Locale {
    return SUPPORTED_LOCALES.find((locale) => locale === this.localeId) ?? DEFAULT_LOCALE;
  }
}
