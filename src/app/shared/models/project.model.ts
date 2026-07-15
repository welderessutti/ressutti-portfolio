import { Technology } from '../data/technologies.data';

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  coverImage: string;
  seoImage: string;
  technologies: readonly Technology[];
  repositoryUrl?: string;
  liveUrl?: string;
  featured: boolean;
  completedAt: Date;
}
