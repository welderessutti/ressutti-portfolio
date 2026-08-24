import { Project } from '../models/project.model';
import { TECHNOLOGIES } from './technologies.data';

export const PROJECTS: Project[] = [
  {
    id: 'glicare',
    slug: 'glicare',

    name: 'Glicare',
    title: 'Glicare',
    subtitle: $localize`:@@projects.data.glicare.subtitle:A web application for diabetes self-management.`,
    shortDescription: $localize`:@@projects.data.glicare.shortDescription:A responsive health platform that centralises glucose readings, medication routines and progress trends to support daily diabetes management.`,
    description: $localize`:@@projects.data.glicare.description:Glicare brings glucose records, medication tracking, progress indicators and educational resources into one structured care experience.`,
    isFeatured: true,

    category: $localize`:@@projects.data.glicare.category:Digital health platform`,
    type: $localize`:@@projects.data.glicare.type:Responsive web application`,
    role: $localize`:@@projects.data.glicare.role:Full-stack development and product design`,
    summary: $localize`:@@projects.data.glicare.summary:A full-stack health application that turns glucose records into clear trends and structured information for patients and care conversations.`,
    outcome: $localize`:@@projects.data.glicare.outcome:A clearer, structured workflow for recording glucose data and reviewing health trends`,

    status: $localize`:@@projects.data.glicare.status:In progress`,
    isCompleted: false,
    timeline: $localize`:@@projects.data.glicare.timeline:1 month`,
    year: {
      startYear: 2026,
      // endYear: 2025,
    },
    technologies: [
      TECHNOLOGIES.angular,
      TECHNOLOGIES.typeScript,
      TECHNOLOGIES.spring,
      TECHNOLOGIES.postgreSql,
      TECHNOLOGIES.docker,
    ],
    // url: 'https://...',
    // liveUrl: 'https://...',
    // repositoryUrl: 'https://github.com/...',

    coverImage: {
      src: 'images/projects/glicare/glicare-cover.webp',
      alt: $localize`:@@projects.data.glicare.images.presentation.alt:Glicare product presentation`,
      width: 1600,
      height: 900,
    },
    seoImage: {
      src: 'images/projects/glicare/glicare-cover.webp',
      alt: $localize`:@@projects.data.glicare.images.presentation.alt:Glicare product presentation`,
      width: 1600,
      height: 900,
    },
    heroImage: {
      src: 'images/projects/glicare/glicare-cover.webp',
      alt: $localize`:@@projects.data.glicare.images.presentation.alt:Glicare product presentation`,
      width: 1600,
      height: 900,
    },

    overview: {
      context: $localize`:@@projects.data.glicare.overview.context:Diabetes management depends on frequent records, but the information is often scattered across paper notes, devices and isolated appointments.`,
      problem: $localize`:@@projects.data.glicare.overview.problem:Patients needed a simpler way to understand glucose trends while care teams needed consistent, structured information to support better conversations.`,
      solution: $localize`:@@projects.data.glicare.overview.solution:Glicare brings measurements, medication routines and progress indicators into one responsive experience designed around quick daily use.`,
    },
    features: [
      {
        id: 'glucose-log',
        title: $localize`:@@projects.data.glicare.features.glucoseLog.title:Frictionless glucose logging`,
        description: $localize`:@@projects.data.glicare.features.glucoseLog.description:Fast, validated records with contextual notes for meals, symptoms and medication.`,
      },
      {
        id: 'trends',
        title: $localize`:@@projects.data.glicare.features.trends.title:Readable health trends`,
        description: $localize`:@@projects.data.glicare.features.trends.description:Daily and weekly views reveal patterns without overwhelming the user with clinical data.`,
      },
      {
        id: 'medication',
        title: $localize`:@@projects.data.glicare.features.medication.title:Medication routine`,
        description: $localize`:@@projects.data.glicare.features.medication.description:A clear schedule connects treatment activity to the wider health timeline.`,
      },
      {
        id: 'care-summary',
        title: $localize`:@@projects.data.glicare.features.careSummary.title:Care-ready summaries`,
        description: $localize`:@@projects.data.glicare.features.careSummary.description:Structured history makes appointments more focused and supports informed decisions.`,
      },
      {
        id: 'responsive',
        title: $localize`:@@projects.data.glicare.features.responsive.title:Responsive by default`,
        description: $localize`:@@projects.data.glicare.features.responsive.description:The same core workflow remains quick and legible across phones, tablets and desktops.`,
      },
      {
        id: 'accessibility',
        title: $localize`:@@projects.data.glicare.features.accessibility.title:Accessible interaction`,
        description: $localize`:@@projects.data.glicare.features.accessibility.description:Semantic structure, keyboard support and strong contrast serve a broader range of users.`,
      },
    ],
    stack: [
      {
        id: 'frontend',
        name: $localize`:@@projects.details.stack.group.frontEnd.heading:Front-end`,
        technologies: [
          {
            id: TECHNOLOGIES.angular.id,
            technology: TECHNOLOGIES.angular,
            description: $localize`:@@projects.data.glicare.stack.angular.description:Component architecture, routing and reactive UI state.`,
          },
          {
            id: TECHNOLOGIES.typeScript.id,
            technology: TECHNOLOGIES.typeScript,
            description: $localize`:@@projects.data.glicare.stack.typeScript.description:Strict domain contracts and safer application logic.`,
          },
        ],
      },
      {
        id: 'backend',
        name: $localize`:@@projects.details.stack.group.backEnd.heading:Back-end`,
        technologies: [
          {
            id: TECHNOLOGIES.spring.id,
            technology: TECHNOLOGIES.spring,
            description: $localize`:@@projects.data.glicare.stack.spring.description:REST services, validation and application security.`,
          },
          {
            id: TECHNOLOGIES.java.id,
            technology: TECHNOLOGIES.java,
            description: $localize`:@@projects.data.glicare.stack.java.description:Typed domain logic and dependable server-side workflows.`,
          },
        ],
      },
      {
        id: 'database',
        name: $localize`:@@projects.details.stack.group.data.heading:Database`,
        technologies: [
          {
            id: TECHNOLOGIES.postgreSql.id,
            technology: TECHNOLOGIES.postgreSql,
            description: $localize`:@@projects.data.glicare.stack.postgreSql.description:Relational storage for health records and user data.`,
          },
        ],
      },
      {
        id: 'infrastructure',
        name: $localize`:@@projects.details.stack.group.infrastructure.heading:Infrastructure`,
        technologies: [
          {
            id: TECHNOLOGIES.docker.id,
            technology: TECHNOLOGIES.docker,
            description: $localize`:@@projects.data.glicare.stack.docker.description:Consistent local and deployment environments.`,
          },
          {
            id: TECHNOLOGIES.aws.id,
            technology: TECHNOLOGIES.aws,
            description: $localize`:@@projects.data.glicare.stack.aws.description:Managed hosting and durable cloud resources.`,
          },
        ],
      },
      {
        id: 'testing',
        name: $localize`:@@projects.details.stack.group.testing.heading:Testing`,
        technologies: [
          {
            id: TECHNOLOGIES.jUnit.id,
            technology: TECHNOLOGIES.jUnit,
            description: $localize`:@@projects.data.glicare.stack.jUnit.description:Unit and integration coverage for critical rules.`,
          },
        ],
      },
    ],
    architecture: {
      description: $localize`:@@projects.data.glicare.architecture.description:A layered web architecture keeps the interface, application rules and persistence independently maintainable. The Angular client communicates with a secured REST API, which coordinates domain services and PostgreSQL.`,
      components: [
        {
          id: 'client',
          name: $localize`:@@projects.data.glicare.architecture.client.name:Angular client`,
          description: $localize`:@@projects.data.glicare.architecture.client.description:Responsive UI and local interaction state`,
        },
        {
          id: 'api',
          name: $localize`:@@projects.data.glicare.architecture.api.name:REST API`,
          description: $localize`:@@projects.data.glicare.architecture.api.description:Authentication, validation and orchestration`,
        },
        {
          id: 'domain',
          name: $localize`:@@projects.data.glicare.architecture.domain.name:Domain services`,
          description: $localize`:@@projects.data.glicare.architecture.domain.description:Health rules and use-case logic`,
        },
        {
          id: 'database',
          name: 'PostgreSQL',
          description: $localize`:@@projects.data.glicare.architecture.database.description:Structured and durable health records`,
        },
      ],
    },
    workflow: [
      {
        id: 'record',
        title: $localize`:@@projects.data.glicare.workflow.record.title:Record`,
        description: $localize`:@@projects.data.glicare.workflow.record.description:The patient adds a glucose measurement and relevant context.`,
      },
      {
        id: 'validate',
        title: $localize`:@@projects.data.glicare.workflow.validate.title:Validate`,
        description: $localize`:@@projects.data.glicare.workflow.validate.description:The API checks the input and applies the health domain rules.`,
      },
      {
        id: 'organise',
        title: $localize`:@@projects.data.glicare.workflow.organise.title:Organise`,
        description: $localize`:@@projects.data.glicare.workflow.organise.description:The record becomes part of the secure longitudinal timeline.`,
      },
      {
        id: 'understand',
        title: $localize`:@@projects.data.glicare.workflow.understand.title:Understand`,
        description: $localize`:@@projects.data.glicare.workflow.understand.description:Updated summaries surface patterns and support the next action.`,
      },
    ],
    decisions: [
      {
        id: 'layered-architecture',
        title: $localize`:@@projects.data.glicare.decisions.layeredArchitecture.title:Layered application boundaries`,
        decision: $localize`:@@projects.data.glicare.decisions.layeredArchitecture.decision:Separate presentation, application rules and persistence.`,
        rationale: $localize`:@@projects.data.glicare.decisions.layeredArchitecture.rationale:Clear boundaries keep health rules testable and allow the interface to evolve without leaking infrastructure concerns.`,
      },
      {
        id: 'relational-data',
        title: $localize`:@@projects.data.glicare.decisions.relationalData.title:Relational data model`,
        decision: $localize`:@@projects.data.glicare.decisions.relationalData.decision:Use PostgreSQL for clinical and account records.`,
        rationale: $localize`:@@projects.data.glicare.decisions.relationalData.rationale:Strong consistency, explicit relationships and transactional operations fit the domain better than flexible document storage.`,
      },
      {
        id: 'progressive-ui',
        title: $localize`:@@projects.data.glicare.decisions.progressiveDisclosure.title:Progressive disclosure`,
        decision: $localize`:@@projects.data.glicare.decisions.progressiveDisclosure.decision:Lead with the next useful action and reveal deeper detail on demand.`,
        rationale: $localize`:@@projects.data.glicare.decisions.progressiveDisclosure.rationale:Health data can feel dense; a calmer hierarchy reduces cognitive load during frequent, short sessions.`,
      },
    ],
    challenges: [
      {
        id: 'clarity',
        title: $localize`:@@projects.data.glicare.challenges.clarity.title:Making dense data feel clear`,
        challenge: $localize`:@@projects.data.glicare.challenges.clarity.challenge:Measurements gain meaning through time, meals and medication, creating a high information density.`,
        solution: $localize`:@@projects.data.glicare.challenges.clarity.solution:Group the experience around daily decisions, with progressive detail and consistent visual signals.`,
        result: $localize`:@@projects.data.glicare.challenges.clarity.result:A faster scan path that keeps trends understandable without hiding important context.`,
      },
      {
        id: 'reliability',
        title: $localize`:@@projects.data.glicare.challenges.reliability.title:Protecting critical records`,
        challenge: $localize`:@@projects.data.glicare.challenges.reliability.challenge:Health information requires reliable writes, strict ownership and predictable validation.`,
        solution: $localize`:@@projects.data.glicare.challenges.reliability.solution:Validate at API boundaries, enforce authorisation server-side and wrap related writes in transactions.`,
        result: $localize`:@@projects.data.glicare.challenges.reliability.result:A dependable data flow with failures handled before incomplete state reaches the timeline.`,
      },
    ],
    engineering: [
      {
        id: 'security',
        category: $localize`:@@projects.details.engineering.category.security.label:Security`,
        description: $localize`:@@projects.data.glicare.engineering.security.description:Defence in depth protects identity and sensitive health records.`,
        highlights: [
          $localize`:@@projects.data.glicare.engineering.security.serverAuthorisation:Server-side authorisation`,
          $localize`:@@projects.data.glicare.engineering.security.apiValidation:Validated API boundaries`,
          $localize`:@@projects.data.glicare.engineering.security.leastPrivilege:Least-privilege access`,
        ],
      },
      {
        id: 'performance',
        category: $localize`:@@projects.details.engineering.category.performance.label:Performance`,
        description: $localize`:@@projects.data.glicare.engineering.performance.description:Small payloads and focused rendering keep daily interactions responsive.`,
        highlights: [
          $localize`:@@projects.data.glicare.engineering.performance.routeLoading:Route-level loading`,
          $localize`:@@projects.data.glicare.engineering.performance.timelineQueries:Indexed timeline queries`,
          $localize`:@@projects.data.glicare.engineering.performance.responsiveMedia:Stable responsive media`,
        ],
      },
      {
        id: 'testing',
        category: $localize`:@@projects.details.engineering.category.testing.label:Testing`,
        description: $localize`:@@projects.data.glicare.engineering.testing.description:Risk-based coverage focuses on domain rules and essential user journeys.`,
        highlights: [
          $localize`:@@projects.data.glicare.engineering.testing.domainUnitTests:Domain unit tests`,
          $localize`:@@projects.data.glicare.engineering.testing.apiIntegrationTests:API integration tests`,
          $localize`:@@projects.data.glicare.engineering.testing.criticalFlowUiTests:Critical-flow UI tests`,
        ],
      },
      {
        id: 'observability',
        category: $localize`:@@projects.details.engineering.category.observability.label:Observability`,
        description: $localize`:@@projects.data.glicare.engineering.observability.description:Structured signals make failures easier to diagnose without exposing private data.`,
        highlights: [
          $localize`:@@projects.data.glicare.engineering.observability.applicationLogs:Structured application logs`,
          $localize`:@@projects.data.glicare.engineering.observability.healthChecks:Health checks`,
          $localize`:@@projects.data.glicare.engineering.observability.errorRateMonitoring:Error-rate monitoring`,
        ],
      },
    ],
    showcase: [
      {
        id: 'dashboard',
        eyebrow: $localize`:@@projects.data.glicare.showcase.dashboard.eyebrow:At a glance`,
        title: $localize`:@@projects.data.glicare.showcase.dashboard.title:A calm daily dashboard`,
        description: $localize`:@@projects.data.glicare.showcase.dashboard.description:The most relevant health indicators and next actions share one hierarchy, helping users orient themselves in seconds.`,
        image: {
          src: 'images/projects/glicare/glicare-cover.webp',
          alt: $localize`:@@projects.data.glicare.showcase.dashboard.image.alt:Glicare dashboard presentation`,
          width: 1600,
          height: 900,
        },
      },
      {
        id: 'timeline',
        eyebrow: $localize`:@@projects.data.glicare.showcase.timeline.eyebrow:From data to context`,
        title: $localize`:@@projects.data.glicare.showcase.timeline.title:History built for pattern recognition`,
        description: $localize`:@@projects.data.glicare.showcase.timeline.description:Measurements are presented as a coherent story rather than an isolated table, making changes easier to spot and discuss.`,
        image: {
          src: 'images/projects/glicare/glicare-cover.webp',
          alt: $localize`:@@projects.data.glicare.showcase.timeline.image.alt:Glicare health timeline presentation`,
          width: 1600,
          height: 900,
        },
      },
    ],
    lessons: {
      learnings: [
        $localize`:@@projects.data.glicare.lessons.learnings.decisionCentredDesign:Designing around user decisions creates a clearer product than mirroring the database model.`,
        $localize`:@@projects.data.glicare.lessons.learnings.domainBoundaries:Explicit domain boundaries reduce rework when interface requirements change.`,
        $localize`:@@projects.data.glicare.lessons.learnings.accessibleStructure:Accessibility decisions are most effective when included in the component structure from the start.`,
      ],
      nextSteps: [
        $localize`:@@projects.data.glicare.lessons.nextSteps.deviceIntegrations:Add device integrations for automatic glucose synchronisation.`,
        $localize`:@@projects.data.glicare.lessons.nextSteps.careTeamReports:Introduce configurable reports for care teams.`,
        $localize`:@@projects.data.glicare.lessons.nextSteps.trendInsights:Expand trend insights while keeping clinical interpretation transparent.`,
      ],
    },
    nextProject: {
      label: 'DeedsCash',
      path: '../deedscash',
    },
  },
];
