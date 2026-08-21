import { OpenGraphType } from '../types/open-graph.type';
import { JsonLdType } from '../types/json-ld.type';
import { RouteValue } from '../../shared/i18n/routes';
import { Locale } from '../../shared/i18n/locales';

export interface Seo {
  readonly title: string;
  readonly description: string;
  readonly currentLocale: Locale;
  readonly path: RouteValue;
  readonly slug?: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly openGraphType: OpenGraphType;
  readonly jsonLdType: JsonLdType;
}
