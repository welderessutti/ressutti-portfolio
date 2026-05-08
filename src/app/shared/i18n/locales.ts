export const LOCALES = {
  enGB: 'en-GB',
  ptBR: 'pt-BR',
} as const;

export type Locale = (typeof LOCALES)[keyof typeof LOCALES];

export const DEFAULT_LOCALE: Locale = LOCALES.enGB;

export const SUPPORTED_LOCALES: Locale[] = [LOCALES.enGB, LOCALES.ptBR];
