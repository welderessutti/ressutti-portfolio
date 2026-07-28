import { Locale } from '../i18n/locales';

export interface Nav {
  readonly id: string;
  readonly label: string;
  readonly path: string;
  readonly locale: Locale;
}
