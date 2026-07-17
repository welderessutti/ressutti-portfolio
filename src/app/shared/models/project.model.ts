import { Technology } from '../data/technologies.data';
import { ProjectStatus } from '../types/project-status.type';

export interface ProjectPeriod {
  readonly startYear: number;
  readonly endYear?: number;
}

export interface Project {
  readonly id: string;
  readonly slug: string;

  readonly title: string;
  readonly subtitle: string;
  readonly shortDescription: string;
  readonly description: string;

  readonly category: string;
  readonly roleSummary: string;
  readonly outcomeSummary: string;
  readonly imageAlt: string;

  readonly coverImage: string;
  readonly coverWidth: number;
  readonly coverHeight: number;
  readonly seoImage: string;

  readonly technologies: readonly Technology[];

  readonly repositoryUrl?: string;
  readonly liveUrl?: string;

  readonly status: ProjectStatus;
  readonly period: ProjectPeriod;
  readonly featured: boolean;
}
