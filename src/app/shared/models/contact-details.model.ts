import { Locale } from '../i18n/locales';

export interface ContactDetails {
  readonly name: string;
  readonly email: string;
  readonly emailUrl: `mailto:${string}`;
  readonly linkedinUrl: `https://${string}`;
  readonly githubUrl: `https://${string}`;
  readonly whatsappNumber: string;
  readonly whatsappUrl: `https://wa.me/${string}`;
  readonly cvPath: Readonly<Record<Locale, `/${string}.pdf`>>;
}
