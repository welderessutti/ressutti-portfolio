import { OpenGraphType } from '../types/open-graph.type';
import { JsonLdType } from '../types/json-ld.type';

export interface Seo {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  path: string;
  openGraphType: OpenGraphType;
  jsonLdType: JsonLdType;
}
