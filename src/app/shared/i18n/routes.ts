import { LOCALES } from './locales';

export const ROUTES = {
  home: {
    [LOCALES.enGB]: '',
    [LOCALES.ptBR]: '',
  },

  projects: {
    [LOCALES.enGB]: 'projects',
    [LOCALES.ptBR]: 'projetos',
  },

  about: {
    [LOCALES.enGB]: 'about',
    [LOCALES.ptBR]: 'sobre',
  },

  contact: {
    [LOCALES.enGB]: 'contact',
    [LOCALES.ptBR]: 'contato',
  },
} as const;

export type RouteKey = keyof typeof ROUTES;
