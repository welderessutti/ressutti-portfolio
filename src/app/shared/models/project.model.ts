import { Technology } from '../data/technologies.data';

export interface ProjectDetailsImage {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
}

export interface ProjectDetailsLink {
  readonly label: string;
  readonly path: string;
}

export interface ProjectDetailsFact {
  readonly label: string;
  readonly value: string;
}

export interface ProjectDetailsFeature {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export interface ProjectDetailsTechnology {
  readonly id: string;
  readonly technology: Technology;
  readonly description: string;
}

export interface ProjectDetailsStackGroup {
  readonly id: string;
  readonly name: string;
  readonly technologies: readonly ProjectDetailsTechnology[];
}

export interface ProjectDetailsArchitectureComponent {
  readonly id: string;
  readonly name: string;
  readonly description: string;
}

export interface ProjectDetailsArchitecture {
  readonly description: string;
  readonly components: readonly ProjectDetailsArchitectureComponent[];
}

export interface ProjectDetailsWorkflowStep {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

export interface ProjectDetailsDecision {
  readonly id: string;
  readonly title: string;
  readonly decision: string;
  readonly rationale: string;
}

export interface ProjectDetailsChallenge {
  readonly id: string;
  readonly title: string;
  readonly challenge: string;
  readonly solution: string;
  readonly result: string;
}

export interface ProjectDetailsShowcaseItem {
  readonly id: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly description: string;
  readonly image: ProjectDetailsImage;
}

export interface ProjectDetailsEngineeringItem {
  readonly id: string;
  readonly category: 'Security' | 'Performance' | 'Testing' | 'Observability' | string;
  readonly description: string;
  readonly highlights: readonly string[];
}

export interface ProjectDetailsLessons {
  readonly learnings: readonly string[];
  readonly nextSteps: readonly string[];
}

export interface ProjectPeriod {
  readonly startYear: number;
  readonly endYear?: number;
}

export interface Project {
  readonly id: string;
  readonly slug: string;

  readonly name: string;
  readonly title: string;
  readonly subtitle: string;
  readonly shortDescription: string;
  readonly description: string;
  readonly featured: boolean;

  readonly category: string;
  readonly type: string;
  readonly role: string;
  readonly summary: string;
  readonly outcome: string;

  readonly status: string;
  readonly completed: boolean;
  readonly timeline: string;
  readonly year: ProjectPeriod;
  readonly technologies: readonly Technology[];

  readonly url?: string;
  readonly liveUrl?: string;
  readonly repositoryUrl?: string;

  readonly coverImage: ProjectDetailsImage;
  readonly seoImage: ProjectDetailsImage;
  readonly heroImage: ProjectDetailsImage;

  readonly overview: {
    readonly context: string;
    readonly problem: string;
    readonly solution: string;
  };
  readonly features?: readonly ProjectDetailsFeature[];
  readonly stack?: readonly ProjectDetailsStackGroup[];
  readonly architecture?: ProjectDetailsArchitecture;
  readonly workflow?: readonly ProjectDetailsWorkflowStep[];
  readonly decisions?: readonly ProjectDetailsDecision[];
  readonly challenges?: readonly ProjectDetailsChallenge[];
  readonly engineering?: readonly ProjectDetailsEngineeringItem[];
  readonly showcase?: readonly ProjectDetailsShowcaseItem[];
  readonly lessons?: ProjectDetailsLessons;
  readonly previousProject?: ProjectDetailsLink;
  readonly nextProject?: ProjectDetailsLink;
}
