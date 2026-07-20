import { Project } from '../models/project.model';
import { TECHNOLOGIES } from './technologies.data';

export const PROJECTS: Project[] = [
  {
    id: 'glicare',
    slug: 'glicare',
    title: 'Glicare',

    subtitle: $localize`:@@project.data.glicare.subtitle:Glicose monitoring system for diabetic patients.`,
    shortDescription: $localize`:@@project.data.glicare.shortDescription:This project is a web application that allows diabetic patients to monitor their glucose levels and manage their health effectively.`,
    description: $localize`:@@project.data.glicare.description:This is a comprehensive solution for managing diabetes, providing tools for monitoring glucose levels, tracking medication, and accessing educational resources.`,

    category: $localize`:@@project.data.glicare.category:Health web application`,
    roleSummary: $localize`:@@project.data.glicare.role:Full-stack development and UX/UI design`,
    outcomeSummary: $localize`:@@project.data.glicare.outcome:Improved patient engagement and health outcomes through effective glucose monitoring`,
    imageAlt: $localize`:@@project.data.glicare.imageAlt:Glicare dashboard showing glucose levels and health metrics`,

    coverImage: '/assets/images/projects/glicare-cover.webp',
    coverWidth: 1600,
    coverHeight: 900,
    seoImage: '/assets/images/seo/projects/glicare.webp',

    technologies: [
      TECHNOLOGIES.angular,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.tailwindCss,
      TECHNOLOGIES.nodeJs,
      TECHNOLOGIES.java,
      TECHNOLOGIES.spring,
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.docker,
      TECHNOLOGIES.aws,
    ],

    repositoryUrl: 'https://github.com/...',
    liveUrl: 'https://...',
    status: 'completed',
    period: { startYear: 2024, endYear: 2025 },
    featured: true,
  },

  {
    id: 'deedscash',
    slug: 'deedscash',
    title: 'DeedsCash',

    subtitle: $localize`:@@project.data.deedscash.subtitle:Personal finance management platform.`,
    shortDescription: $localize`:@@project.data.deedscash.shortDescription:A web application for organising income, expenses and financial activity.`,
    description: $localize`:@@project.data.deedscash.description:A more complete description reserved for the project detail page.`,

    category: $localize`:@@project.data.deedscash.category:Financial web application`,
    roleSummary: $localize`:@@project.data.deedscash.role:Full-stack development and product design`,
    outcomeSummary: $localize`:@@project.data.deedscash.outcome:Centralised financial records in a clear and maintainable workflow`,
    imageAlt: $localize`:@@project.data.deedscash.imageAlt:DeedsCash dashboard showing financial summaries and recent transactions`,

    coverImage: '/assets/images/projects/deedscash-cover.webp',
    coverWidth: 1600,
    coverHeight: 900,
    seoImage: '/assets/images/seo/projects/deedscash.webp',

    technologies: [
      TECHNOLOGIES.angular,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.java,
      TECHNOLOGIES.spring,
      TECHNOLOGIES.mysql,
      TECHNOLOGIES.docker,
      TECHNOLOGIES.azure,
    ],

    repositoryUrl: 'https://github.com/...',
    liveUrl: 'https://...',
    status: 'in-progress',
    period: { startYear: 2026 },
    featured: true,
  },

  {
    id: 'outro',
    slug: 'outro',
    title: 'Outro',

    subtitle: $localize`:@@project.data.outro.subtitle:Personal finance management platform.`,
    shortDescription: $localize`:@@project.data.outro.shortDescription:A web application for organising income, expenses and financial activity.`,
    description: $localize`:@@project.data.outro.description:A more complete description reserved for the project detail page.`,

    category: $localize`:@@project.data.outro.category:Financial web application`,
    roleSummary: $localize`:@@project.data.outro.role:Full-stack development and product design`,
    outcomeSummary: $localize`:@@project.data.outro.outcome:Centralised financial records in a clear and maintainable workflow`,
    imageAlt: $localize`:@@project.data.outro.imageAlt:Outro dashboard showing financial summaries and recent transactions`,

    coverImage: '/assets/images/projects/outro-cover.webp',
    coverWidth: 1600,
    coverHeight: 900,
    seoImage: '/assets/images/seo/projects/outro.webp',

    technologies: [
      TECHNOLOGIES.angular,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.java,
      TECHNOLOGIES.spring,
    ],

    repositoryUrl: 'https://github.com/...',
    liveUrl: 'https://...',
    status: 'in-progress',
    period: { startYear: 2026 },
    featured: true,
  },
];
