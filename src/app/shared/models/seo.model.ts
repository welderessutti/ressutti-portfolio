import { OpenGraphType } from '../types/open-graph.type';
import { JsonLdType } from '../types/json-ld.type';
import { RouteValue } from '../../shared/i18n/routes';
import { Locale } from '../../shared/i18n/locales';

interface SeoBase {
  readonly title: string;
  readonly description: string;
  readonly currentLocale: Locale;
  readonly image: string;
}

export interface IndexableSeo extends SeoBase {
  readonly indexable: true;
  readonly path: RouteValue;
  readonly slug?: string;
  readonly imageAlt: string;
  readonly openGraphType: OpenGraphType;
  readonly jsonLdType: JsonLdType;
}

export interface NonIndexableSeo extends SeoBase {
  readonly indexable: false;
}

export type Seo = IndexableSeo | NonIndexableSeo;
