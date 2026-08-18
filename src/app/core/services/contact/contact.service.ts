import { Injectable, inject, DOCUMENT } from '@angular/core';
import { Locale } from '../../../shared/i18n/locales';
import { PROFILE } from '../../../shared/data/profile.data';
import { Contact } from '../../../shared/models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly document = inject(DOCUMENT);
  private readonly currentLocale = this.currentLocaleHtml;
  private readonly profile = PROFILE;
  public readonly cvPath = this.profile.cvPath[this.currentLocale];

  private get currentLocaleHtml(): Locale {
    return this.document.documentElement.lang as Locale;
  }

  public readonly contacts: Contact[] = [
    {
      id: 'email',
      label: $localize`:@@shared.contactChannels.email.label:Email`,
      accessibleLabel: $localize`:@@shared.contactChannels.email.ariaLabel:Send an email`,
      url: this.profile.emailUrl,
      external: false,
      primary: true,
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      accessibleLabel: $localize`:@@shared.contactChannels.linkedin.ariaLabel:Open LinkedIn in a new tab`,
      url: this.profile.linkedinUrl,
      external: true,
      primary: false,
    },
    {
      id: 'github',
      label: 'GitHub',
      accessibleLabel: $localize`:@@shared.contactChannels.github.ariaLabel:Open GitHub in a new tab`,
      url: this.profile.githubUrl,
      external: true,
      primary: false,
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      accessibleLabel: $localize`:@@shared.contactChannels.whatsapp.ariaLabel:Open WhatsApp in a new tab`,
      url: this.profile.whatsappUrl,
      external: true,
      primary: false,
    },
  ];
}
