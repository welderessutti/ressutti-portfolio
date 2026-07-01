export type OgType = 'website' | 'article' | 'profile';

export type JsonLdType =
  | 'WebPage'
  | 'Article'
  | 'Person'
  | 'CollectionPage'
  | 'AboutPage'
  | 'ContactPage';

export interface Seo {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  path: string;
  ogType: OgType;
  jsonLdType: JsonLdType;
}
