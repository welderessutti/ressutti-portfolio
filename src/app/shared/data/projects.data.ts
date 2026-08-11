import { Project } from '../models/project.model';
import { TECHNOLOGIES } from './technologies.data';

export const PROJECTS: Project[] = [
  {
    id: 'glicare',
    slug: 'glicare',

    name: 'Glicare',
    title: 'Glicare',
    subtitle: $localize`:@@project.data.glicare.subtitle:Glicose monitoring system for diabetic patients.`,
    shortDescription: $localize`:@@project.data.glicare.shortDescription:This project is a web application that allows diabetic patients to monitor their glucose levels and manage their health effectively.`,
    description: $localize`:@@project.data.glicare.description:This is a comprehensive solution for managing diabetes, providing tools for monitoring glucose levels, tracking medication, and accessing educational resources.`,
    featured: true,

    category: $localize`:@@projectDetails.default.category:Digital health platform`,
    type: $localize`:@@projectDetails.default.type:Responsive web application`,
    role: $localize`:@@projectDetails.default.role:Full-stack development & product design`,
    summary: $localize`:@@projectDetails.default.summary:A focused care experience that turns daily glucose records into clear, actionable health insights.`,
    outcome: $localize`:@@project.data.glicare.outcome:Improved patient engagement and health outcomes through effective glucose monitoring`,

    status: $localize`:@@projectDetails.default.status:Completed`,
    timeline: $localize`:@@projectDetails.default.timeline:8 months`,
    year: {
      startYear: 2024,
      endYear: 2025,
    },
    technologies: [
      TECHNOLOGIES.angular,
      TECHNOLOGIES.typeScript,
      TECHNOLOGIES.spring,
      TECHNOLOGIES.postgreSql,
      TECHNOLOGIES.docker,
    ],
    url: 'https://...',
    liveUrl: 'https://...',
    repositoryUrl: 'https://github.com/...',

    coverImage: {
      src: 'images/projects/1785012012152.png',
      alt: $localize`:@@projectDetails.default.heroImageAlt:Glicare product presentation`,
      width: 1600,
      height: 900,
    },
    seoImage: {
      src: 'images/projects/1785012012152.png',
      alt: $localize`:@@projectDetails.default.heroImageAlt:Glicare product presentation`,
      width: 1600,
      height: 900,
    },
    heroImage: {
      src: 'images/projects/1785012012152.png',
      alt: $localize`:@@projectDetails.default.heroImageAlt:Glicare product presentation`,
      width: 1600,
      height: 900,
    },

    overview: {
      context: $localize`:@@projectDetails.default.overview.context:Diabetes management depends on frequent records, but the information is often scattered across paper notes, devices and isolated appointments.`,
      problem: $localize`:@@projectDetails.default.overview.problem:Patients needed a simpler way to understand glucose trends while care teams needed consistent, structured information to support better conversations.`,
      solution: $localize`:@@projectDetails.default.overview.solution:Glicare brings measurements, medication routines and progress indicators into one responsive experience designed around quick daily use.`,
    },
    features: [
      {
        id: 'glucose-log',
        title: $localize`:@@projectDetails.default.features.glucoseLog.title:Frictionless glucose logging`,
        description: $localize`:@@projectDetails.default.features.glucoseLog.description:Fast, validated records with contextual notes for meals, symptoms and medication.`,
      },
      {
        id: 'trends',
        title: $localize`:@@projectDetails.default.features.trends.title:Readable health trends`,
        description: $localize`:@@projectDetails.default.features.trends.description:Daily and weekly views reveal patterns without overwhelming the user with clinical data.`,
      },
      {
        id: 'medication',
        title: $localize`:@@projectDetails.default.features.medication.title:Medication routine`,
        description: $localize`:@@projectDetails.default.features.medication.description:A clear schedule connects treatment activity to the wider health timeline.`,
      },
      {
        id: 'care-summary',
        title: $localize`:@@projectDetails.default.features.careSummary.title:Care-ready summaries`,
        description: $localize`:@@projectDetails.default.features.careSummary.description:Structured history makes appointments more focused and supports informed decisions.`,
      },
      {
        id: 'responsive',
        title: $localize`:@@projectDetails.default.features.responsive.title:Responsive by default`,
        description: $localize`:@@projectDetails.default.features.responsive.description:The same core workflow remains quick and legible across phones, tablets and desktops.`,
      },
      {
        id: 'accessibility',
        title: $localize`:@@projectDetails.default.features.accessibility.title:Accessible interaction`,
        description: $localize`:@@projectDetails.default.features.accessibility.description:Semantic structure, keyboard support and strong contrast serve a broader range of users.`,
      },
    ],
    stack: [
      {
        id: 'frontend',
        name: $localize`:@@projectDetails.stack.frontend:Front-end`,
        technologies: [
          {
            id: TECHNOLOGIES.angular.id,
            technology: TECHNOLOGIES.angular,
            description: $localize`:@@projectDetails.default.stack.angular:Component architecture, routing and reactive UI state.`,
          },
          {
            id: TECHNOLOGIES.typeScript.id,
            technology: TECHNOLOGIES.typeScript,
            description: $localize`:@@projectDetails.default.stack.typescript:Strict domain contracts and safer application logic.`,
          },
        ],
      },
      {
        id: 'backend',
        name: $localize`:@@projectDetails.stack.backend:Back-end`,
        technologies: [
          {
            id: TECHNOLOGIES.spring.id,
            technology: TECHNOLOGIES.spring,
            description: $localize`:@@projectDetails.default.stack.spring:REST services, validation and application security.`,
          },
          {
            id: TECHNOLOGIES.java.id,
            technology: TECHNOLOGIES.java,
            description: $localize`:@@projectDetails.default.stack.java:Typed domain logic and dependable server-side workflows.`,
          },
        ],
      },
      {
        id: 'data',
        name: $localize`:@@projectDetails.stack.data:Data`,
        technologies: [
          {
            id: TECHNOLOGIES.postgreSql.id,
            technology: TECHNOLOGIES.postgreSql,
            description: $localize`:@@projectDetails.default.stack.postgresql:Relational storage for health records and user data.`,
          },
        ],
      },
      {
        id: 'infrastructure',
        name: $localize`:@@projectDetails.stack.infrastructure:Infrastructure`,
        technologies: [
          {
            id: TECHNOLOGIES.docker.id,
            technology: TECHNOLOGIES.docker,
            description: $localize`:@@projectDetails.default.stack.docker:Consistent local and deployment environments.`,
          },
          {
            id: TECHNOLOGIES.aws.id,
            technology: TECHNOLOGIES.aws,
            description: $localize`:@@projectDetails.default.stack.aws:Managed hosting and durable cloud resources.`,
          },
        ],
      },
      {
        id: 'testing',
        name: $localize`:@@projectDetails.stack.testing:Testing`,
        technologies: [
          {
            id: TECHNOLOGIES.jUnit.id,
            technology: TECHNOLOGIES.jUnit,
            description: $localize`:@@projectDetails.default.stack.junit:Unit and integration coverage for critical rules.`,
          },
        ],
      },
    ],
    architecture: {
      description: $localize`:@@projectDetails.default.architecture.description:A layered web architecture keeps the interface, application rules and persistence independently maintainable. The Angular client communicates with a secured REST API, which coordinates domain services and PostgreSQL.`,
      components: [
        {
          id: 'client',
          name: $localize`:@@projectDetails.default.architecture.client.name:Angular client`,
          description: $localize`:@@projectDetails.default.architecture.client.description:Responsive UI and local interaction state`,
        },
        {
          id: 'api',
          name: $localize`:@@projectDetails.default.architecture.api.name:REST API`,
          description: $localize`:@@projectDetails.default.architecture.api.description:Authentication, validation and orchestration`,
        },
        {
          id: 'domain',
          name: $localize`:@@projectDetails.default.architecture.domain.name:Domain services`,
          description: $localize`:@@projectDetails.default.architecture.domain.description:Health rules and use-case logic`,
        },
        {
          id: 'database',
          name: 'PostgreSQL',
          description: $localize`:@@projectDetails.default.architecture.database.description:Structured and durable health records`,
        },
      ],
    },
    workflow: [
      {
        id: 'record',
        title: $localize`:@@projectDetails.default.workflow.record.title:Record`,
        description: $localize`:@@projectDetails.default.workflow.record.description:The patient adds a glucose measurement and relevant context.`,
      },
      {
        id: 'validate',
        title: $localize`:@@projectDetails.default.workflow.validate.title:Validate`,
        description: $localize`:@@projectDetails.default.workflow.validate.description:The API checks the input and applies the health domain rules.`,
      },
      {
        id: 'organise',
        title: $localize`:@@projectDetails.default.workflow.organise.title:Organise`,
        description: $localize`:@@projectDetails.default.workflow.organise.description:The record becomes part of the secure longitudinal timeline.`,
      },
      {
        id: 'understand',
        title: $localize`:@@projectDetails.default.workflow.understand.title:Understand`,
        description: $localize`:@@projectDetails.default.workflow.understand.description:Updated summaries surface patterns and support the next action.`,
      },
    ],
    decisions: [
      {
        id: 'layered-architecture',
        title: $localize`:@@projectDetails.default.decisions.layered.title:Layered application boundaries`,
        decision: $localize`:@@projectDetails.default.decisions.layered.decision:Separate presentation, application rules and persistence.`,
        rationale: $localize`:@@projectDetails.default.decisions.layered.rationale:Clear boundaries keep health rules testable and allow the interface to evolve without leaking infrastructure concerns.`,
      },
      {
        id: 'relational-data',
        title: $localize`:@@projectDetails.default.decisions.relational.title:Relational data model`,
        decision: $localize`:@@projectDetails.default.decisions.relational.decision:Use PostgreSQL for clinical and account records.`,
        rationale: $localize`:@@projectDetails.default.decisions.relational.rationale:Strong consistency, explicit relationships and transactional operations fit the domain better than flexible document storage.`,
      },
      {
        id: 'progressive-ui',
        title: $localize`:@@projectDetails.default.decisions.progressive.title:Progressive disclosure`,
        decision: $localize`:@@projectDetails.default.decisions.progressive.decision:Lead with the next useful action and reveal deeper detail on demand.`,
        rationale: $localize`:@@projectDetails.default.decisions.progressive.rationale:Health data can feel dense; a calmer hierarchy reduces cognitive load during frequent, short sessions.`,
      },
    ],
    challenges: [
      {
        id: 'clarity',
        title: $localize`:@@projectDetails.default.challenges.clarity.title:Making dense data feel clear`,
        challenge: $localize`:@@projectDetails.default.challenges.clarity.challenge:Measurements gain meaning through time, meals and medication, creating a high information density.`,
        solution: $localize`:@@projectDetails.default.challenges.clarity.solution:Group the experience around daily decisions, with progressive detail and consistent visual signals.`,
        result: $localize`:@@projectDetails.default.challenges.clarity.result:A faster scan path that keeps trends understandable without hiding important context.`,
      },
      {
        id: 'reliability',
        title: $localize`:@@projectDetails.default.challenges.reliability.title:Protecting critical records`,
        challenge: $localize`:@@projectDetails.default.challenges.reliability.challenge:Health information requires reliable writes, strict ownership and predictable validation.`,
        solution: $localize`:@@projectDetails.default.challenges.reliability.solution:Validate at API boundaries, enforce authorisation server-side and wrap related writes in transactions.`,
        result: $localize`:@@projectDetails.default.challenges.reliability.result:A dependable data flow with failures handled before incomplete state reaches the timeline.`,
      },
    ],
    showcase: [
      {
        id: 'dashboard',
        eyebrow: $localize`:@@projectDetails.default.showcase.dashboard.eyebrow:At a glance`,
        title: $localize`:@@projectDetails.default.showcase.dashboard.title:A calm daily dashboard`,
        description: $localize`:@@projectDetails.default.showcase.dashboard.description:The most relevant health indicators and next actions share one hierarchy, helping users orient themselves in seconds.`,
        image: {
          src: 'images/projects/1785012012152.png',
          alt: $localize`:@@projectDetails.default.showcase.dashboard.alt:Glicare dashboard presentation`,
          width: 1600,
          height: 900,
        },
      },
      {
        id: 'timeline',
        eyebrow: $localize`:@@projectDetails.default.showcase.timeline.eyebrow:From data to context`,
        title: $localize`:@@projectDetails.default.showcase.timeline.title:History built for pattern recognition`,
        description: $localize`:@@projectDetails.default.showcase.timeline.description:Measurements are presented as a coherent story rather than an isolated table, making changes easier to spot and discuss.`,
        image: {
          src: 'images/projects/1785012012152.png',
          alt: $localize`:@@projectDetails.default.showcase.timeline.alt:Glicare health timeline presentation`,
          width: 1600,
          height: 900,
        },
      },
    ],
    engineering: [
      {
        id: 'security',
        category: 'Security',
        description: $localize`:@@projectDetails.default.engineering.security.description:Defence in depth protects identity and sensitive health records.`,
        highlights: [
          $localize`:@@projectDetails.default.engineering.security.item1:Server-side authorisation`,
          $localize`:@@projectDetails.default.engineering.security.item2:Validated API boundaries`,
          $localize`:@@projectDetails.default.engineering.security.item3:Least-privilege access`,
        ],
      },
      {
        id: 'performance',
        category: 'Performance',
        description: $localize`:@@projectDetails.default.engineering.performance.description:Small payloads and focused rendering keep daily interactions responsive.`,
        highlights: [
          $localize`:@@projectDetails.default.engineering.performance.item1:Route-level loading`,
          $localize`:@@projectDetails.default.engineering.performance.item2:Indexed timeline queries`,
          $localize`:@@projectDetails.default.engineering.performance.item3:Stable responsive media`,
        ],
      },
      {
        id: 'testing',
        category: 'Testing',
        description: $localize`:@@projectDetails.default.engineering.testing.description:Risk-based coverage focuses on domain rules and essential user journeys.`,
        highlights: [
          $localize`:@@projectDetails.default.engineering.testing.item1:Domain unit tests`,
          $localize`:@@projectDetails.default.engineering.testing.item2:API integration tests`,
          $localize`:@@projectDetails.default.engineering.testing.item3:Critical-flow UI tests`,
        ],
      },
      {
        id: 'observability',
        category: 'Observability',
        description: $localize`:@@projectDetails.default.engineering.observability.description:Structured signals make failures easier to diagnose without exposing private data.`,
        highlights: [
          $localize`:@@projectDetails.default.engineering.observability.item1:Structured application logs`,
          $localize`:@@projectDetails.default.engineering.observability.item2:Health checks`,
          $localize`:@@projectDetails.default.engineering.observability.item3:Error-rate monitoring`,
        ],
      },
    ],
    lessons: {
      learnings: [
        $localize`:@@projectDetails.default.lessons.learning1:Designing around user decisions creates a clearer product than mirroring the database model.`,
        $localize`:@@projectDetails.default.lessons.learning2:Explicit domain boundaries reduce rework when interface requirements change.`,
        $localize`:@@projectDetails.default.lessons.learning3:Accessibility decisions are most effective when included in the component structure from the start.`,
      ],
      nextSteps: [
        $localize`:@@projectDetails.default.lessons.nextStep1:Add device integrations for automatic glucose synchronisation.`,
        $localize`:@@projectDetails.default.lessons.nextStep2:Introduce configurable reports for care teams.`,
        $localize`:@@projectDetails.default.lessons.nextStep3:Expand trend insights while keeping clinical interpretation transparent.`,
      ],
    },
    nextProject: {
      label: 'DeedsCash',
      path: '../deedscash',
    },
  },
];
