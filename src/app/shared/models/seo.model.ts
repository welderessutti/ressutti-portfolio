import { OpenGraphType } from '../types/open-graph.type';
import { JsonLdType } from '../types/json-ld.type';
import { RouteValue } from '../../shared/i18n/routes';

export interface Seo {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  path: RouteValue;
  openGraphType: OpenGraphType;
  jsonLdType: JsonLdType;
}
