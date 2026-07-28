import { OpenGraphType } from '../types/open-graph.type';
import { JsonLdType } from '../types/json-ld.type';
import { RouteValue } from '../../shared/i18n/routes';

export interface Seo {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly path: RouteValue;
  readonly openGraphType: OpenGraphType;
  readonly jsonLdType: JsonLdType;
}
