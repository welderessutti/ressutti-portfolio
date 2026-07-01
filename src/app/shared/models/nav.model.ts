import { Locale } from '../i18n/locales';

export interface Nav {
  id: string;
  label: string;
  path: string;
  locale: Locale;
}
