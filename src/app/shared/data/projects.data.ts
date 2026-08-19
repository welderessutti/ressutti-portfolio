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
    featured: true,

    category: $localize`:@@projects.data.glicare.category:Digital health platform`,
    type: $localize`:@@projects.data.glicare.type:Responsive web application`,
    role: $localize`:@@projects.data.glicare.role:Full-stack development and product design`,
    summary: $localize`:@@projects.data.glicare.summary:A full-stack health application that turns glucose records into clear trends and structured information for patients and care conversations.`,
    outcome: $localize`:@@projects.data.glicare.outcome:A clearer, structured workflow for recording glucose data and reviewing health trends`,

    status: $localize`:@@projects.data.glicare.status:In progress`,
    completed: false,
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
      src: 'images/projects/1785012012152.png',
      alt: $localize`:@@projects.data.glicare.images.presentation.alt:Glicare product presentation`,
      width: 1600,
      height: 900,
    },
    seoImage: {
      src: 'images/projects/1785012012152.png',
      alt: $localize`:@@projects.data.glicare.images.presentation.alt:Glicare product presentation`,
      width: 1600,
      height: 900,
    },
    heroImage: {
      src: 'images/projects/1785012012152.png',
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
          src: 'images/projects/1785012012152.png',
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
          src: 'images/projects/1785012012152.png',
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
  // {
  //   id: 'deedscash',
  //   slug: 'deedscash',

  //   name: 'DeedsCash',
  //   title: 'DeedsCash',
  //   subtitle: $localize`:@@project.data.deedscash.subtitle:Personal finance made simple and visible.`,
  //   shortDescription: $localize`:@@project.data.deedscash.shortDescription:A compact dashboard for tracking expenses, budgets and everyday financial goals.`,
  //   description: $localize`:@@project.data.deedscash.description:DeedsCash is a personal finance platform that brings accounts, transactions and budgets into one clear workspace for confident day-to-day money management.`,
  //   featured: true,

  //   category: $localize`:@@project.data.deedscash.category:Personal finance platform`,
  //   type: $localize`:@@project.data.deedscash.type:Responsive web application`,
  //   role: $localize`:@@project.data.deedscash.role:Full-stack development & UX design`,
  //   summary: $localize`:@@project.data.deedscash.summary:A focused financial workspace that helps people understand where their money goes and what they can do next.`,
  //   outcome: $localize`:@@project.data.deedscash.outcome:Faster budget reviews and clearer visibility into monthly spending`,

  //   status: $localize`:@@project.data.deedscash.status:Completed`,
  //   completed: false,
  //   timeline: $localize`:@@project.data.deedscash.timeline:6 months`,
  //   year: {
  //     startYear: 2023,
  //     endYear: 2024,
  //   },
  //   technologies: [
  //     TECHNOLOGIES.angular,
  //     TECHNOLOGIES.typeScript,
  //     TECHNOLOGIES.spring,
  //     TECHNOLOGIES.postgreSql,
  //     TECHNOLOGIES.docker,
  //   ],
  //   url: 'https://...',
  //   liveUrl: 'https://...',
  //   repositoryUrl: 'https://github.com/...',

  //   coverImage: {
  //     src: 'images/projects/1785012012152.png',
  //     alt: $localize`:@@project.data.deedscash.coverImageAlt:DeedsCash product presentation`,
  //     width: 1600,
  //     height: 900,
  //   },
  //   seoImage: {
  //     src: 'images/projects/1785012012152.png',
  //     alt: $localize`:@@project.data.deedscash.seoImageAlt:DeedsCash personal finance dashboard`,
  //     width: 1600,
  //     height: 900,
  //   },
  //   heroImage: {
  //     src: 'images/projects/1785012012152.png',
  //     alt: $localize`:@@project.data.deedscash.heroImageAlt:DeedsCash dashboard presentation`,
  //     width: 1600,
  //     height: 900,
  //   },

  //   overview: {
  //     context: $localize`:@@project.data.deedscash.overview.context:Personal finances are often divided between banking apps, spreadsheets and notes, making a simple monthly review unnecessarily time-consuming.`,
  //     problem: $localize`:@@project.data.deedscash.overview.problem:Users needed a quick way to classify spending, compare it with their budget and understand whether their goals were still achievable.`,
  //     solution: $localize`:@@project.data.deedscash.overview.solution:DeedsCash consolidates transactions, categories and goals in a responsive dashboard built around short, repeatable financial check-ins.`,
  //   },
  //   features: [
  //     {
  //       id: 'transaction-tracking',
  //       title: $localize`:@@project.data.deedscash.features.transactionTracking.title:Fast transaction tracking`,
  //       description: $localize`:@@project.data.deedscash.features.transactionTracking.description:Add and categorise income or expenses with a short, validated flow.`,
  //     },
  //     {
  //       id: 'monthly-budget',
  //       title: $localize`:@@project.data.deedscash.features.monthlyBudget.title:Monthly budgets`,
  //       description: $localize`:@@project.data.deedscash.features.monthlyBudget.description:Set practical limits and follow progress without maintaining a separate spreadsheet.`,
  //     },
  //     {
  //       id: 'cash-flow',
  //       title: $localize`:@@project.data.deedscash.features.cashFlow.title:Cash-flow overview`,
  //       description: $localize`:@@project.data.deedscash.features.cashFlow.description:Clear summaries connect recent activity with the expected end-of-month balance.`,
  //     },
  //     {
  //       id: 'financial-goals',
  //       title: $localize`:@@project.data.deedscash.features.financialGoals.title:Financial goals`,
  //       description: $localize`:@@project.data.deedscash.features.financialGoals.description:Track savings targets through visible milestones and realistic contribution plans.`,
  //     },
  //     {
  //       id: 'search-and-filters',
  //       title: $localize`:@@project.data.deedscash.features.searchAndFilters.title:Useful search and filters`,
  //       description: $localize`:@@project.data.deedscash.features.searchAndFilters.description:Find transactions by period, category or description without losing context.`,
  //     },
  //     {
  //       id: 'responsive-experience',
  //       title: $localize`:@@project.data.deedscash.features.responsiveExperience.title:Responsive experience`,
  //       description: $localize`:@@project.data.deedscash.features.responsiveExperience.description:Essential actions remain quick and readable from mobile screens to desktop dashboards.`,
  //     },
  //   ],
  //   stack: [
  //     {
  //       id: 'frontend',
  //       name: $localize`:@@project.data.deedscash.stack.frontend.name:Front-end`,
  //       technologies: [
  //         {
  //           id: TECHNOLOGIES.angular.id,
  //           technology: TECHNOLOGIES.angular,
  //           description: $localize`:@@project.data.deedscash.stack.angular:Reusable dashboard components, navigation and reactive interface state.`,
  //         },
  //         {
  //           id: TECHNOLOGIES.typeScript.id,
  //           technology: TECHNOLOGIES.typeScript,
  //           description: $localize`:@@project.data.deedscash.stack.typescript:Strict financial models and safer calculations across the client.`,
  //         },
  //       ],
  //     },
  //     {
  //       id: 'backend',
  //       name: $localize`:@@project.data.deedscash.stack.backend.name:Back-end`,
  //       technologies: [
  //         {
  //           id: TECHNOLOGIES.spring.id,
  //           technology: TECHNOLOGIES.spring,
  //           description: $localize`:@@project.data.deedscash.stack.spring:REST endpoints, validation and secure account workflows.`,
  //         },
  //         {
  //           id: TECHNOLOGIES.java.id,
  //           technology: TECHNOLOGIES.java,
  //           description: $localize`:@@project.data.deedscash.stack.java:Domain rules for budgets, balances and recurring transactions.`,
  //         },
  //       ],
  //     },
  //     {
  //       id: 'data',
  //       name: $localize`:@@project.data.deedscash.stack.data.name:Data`,
  //       technologies: [
  //         {
  //           id: TECHNOLOGIES.postgreSql.id,
  //           technology: TECHNOLOGIES.postgreSql,
  //           description: $localize`:@@project.data.deedscash.stack.postgresql:Transactional storage for accounts, categories and financial entries.`,
  //         },
  //       ],
  //     },
  //     {
  //       id: 'infrastructure',
  //       name: $localize`:@@project.data.deedscash.stack.infrastructure.name:Infrastructure`,
  //       technologies: [
  //         {
  //           id: TECHNOLOGIES.docker.id,
  //           technology: TECHNOLOGIES.docker,
  //           description: $localize`:@@project.data.deedscash.stack.docker:Repeatable environments for development, testing and deployment.`,
  //         },
  //         {
  //           id: TECHNOLOGIES.aws.id,
  //           technology: TECHNOLOGIES.aws,
  //           description: $localize`:@@project.data.deedscash.stack.aws:Cloud hosting, managed storage and operational monitoring.`,
  //         },
  //       ],
  //     },
  //     {
  //       id: 'testing',
  //       name: $localize`:@@project.data.deedscash.stack.testing.name:Testing`,
  //       technologies: [
  //         {
  //           id: TECHNOLOGIES.jUnit.id,
  //           technology: TECHNOLOGIES.jUnit,
  //           description: $localize`:@@project.data.deedscash.stack.junit:Automated coverage for calculations and critical financial rules.`,
  //         },
  //       ],
  //     },
  //   ],
  //   architecture: {
  //     description: $localize`:@@project.data.deedscash.architecture.description:A layered architecture separates the responsive Angular interface from financial use cases and persistence. The secured API coordinates account operations while PostgreSQL protects relational consistency.`,
  //     components: [
  //       {
  //         id: 'client',
  //         name: $localize`:@@project.data.deedscash.architecture.client.name:Angular client`,
  //         description: $localize`:@@project.data.deedscash.architecture.client.description:Dashboard views and local interaction state`,
  //       },
  //       {
  //         id: 'api',
  //         name: $localize`:@@project.data.deedscash.architecture.api.name:Finance API`,
  //         description: $localize`:@@project.data.deedscash.architecture.api.description:Authentication, validation and use-case orchestration`,
  //       },
  //       {
  //         id: 'domain',
  //         name: $localize`:@@project.data.deedscash.architecture.domain.name:Financial domain`,
  //         description: $localize`:@@project.data.deedscash.architecture.domain.description:Budget, balance and transaction rules`,
  //       },
  //       {
  //         id: 'database',
  //         name: 'PostgreSQL',
  //         description: $localize`:@@project.data.deedscash.architecture.database.description:Consistent account and transaction records`,
  //       },
  //     ],
  //   },
  //   workflow: [
  //     {
  //       id: 'capture',
  //       title: $localize`:@@project.data.deedscash.workflow.capture.title:Capture`,
  //       description: $localize`:@@project.data.deedscash.workflow.capture.description:The user records a transaction with its value, date and category.`,
  //     },
  //     {
  //       id: 'classify',
  //       title: $localize`:@@project.data.deedscash.workflow.classify.title:Classify`,
  //       description: $localize`:@@project.data.deedscash.workflow.classify.description:The platform validates and organises the entry in the correct account.`,
  //     },
  //     {
  //       id: 'compare',
  //       title: $localize`:@@project.data.deedscash.workflow.compare.title:Compare`,
  //       description: $localize`:@@project.data.deedscash.workflow.compare.description:The updated total is compared with the category budget and monthly plan.`,
  //     },
  //     {
  //       id: 'adjust',
  //       title: $localize`:@@project.data.deedscash.workflow.adjust.title:Adjust`,
  //       description: $localize`:@@project.data.deedscash.workflow.adjust.description:The dashboard highlights useful actions before a budget limit is reached.`,
  //     },
  //   ],
  //   decisions: [
  //     {
  //       id: 'decimal-values',
  //       title: $localize`:@@project.data.deedscash.decisions.decimalValues.title:Precise monetary values`,
  //       decision: $localize`:@@project.data.deedscash.decisions.decimalValues.decision:Represent money with explicit decimal types instead of floating-point values.`,
  //       rationale: $localize`:@@project.data.deedscash.decisions.decimalValues.rationale:Financial totals must remain predictable across calculations, storage and API boundaries.`,
  //     },
  //     {
  //       id: 'server-rules',
  //       title: $localize`:@@project.data.deedscash.decisions.serverRules.title:Server-owned business rules`,
  //       decision: $localize`:@@project.data.deedscash.decisions.serverRules.decision:Keep budget and balance calculations authoritative on the server.`,
  //       rationale: $localize`:@@project.data.deedscash.decisions.serverRules.rationale:One source of truth prevents different clients from producing conflicting financial results.`,
  //     },
  //     {
  //       id: 'summary-first',
  //       title: $localize`:@@project.data.deedscash.decisions.summaryFirst.title:Summary-first interface`,
  //       decision: $localize`:@@project.data.deedscash.decisions.summaryFirst.decision:Show the current financial position before detailed tables.`,
  //       rationale: $localize`:@@project.data.deedscash.decisions.summaryFirst.rationale:Users can understand their situation quickly and inspect individual entries only when needed.`,
  //     },
  //   ],
  //   challenges: [
  //     {
  //       id: 'calculation-consistency',
  //       title: $localize`:@@project.data.deedscash.challenges.calculationConsistency.title:Keeping calculations consistent`,
  //       challenge: $localize`:@@project.data.deedscash.challenges.calculationConsistency.challenge:Edits, deletions and recurring entries can change several related totals at once.`,
  //       solution: $localize`:@@project.data.deedscash.challenges.calculationConsistency.solution:Centralise calculations in tested domain services and update related records transactionally.`,
  //       result: $localize`:@@project.data.deedscash.challenges.calculationConsistency.result:Reliable balances that remain aligned across dashboards, budgets and reports.`,
  //     },
  //     {
  //       id: 'dashboard-density',
  //       title: $localize`:@@project.data.deedscash.challenges.dashboardDensity.title:Balancing detail and clarity`,
  //       challenge: $localize`:@@project.data.deedscash.challenges.dashboardDensity.challenge:Finance dashboards can become crowded when every metric competes for attention.`,
  //       solution: $localize`:@@project.data.deedscash.challenges.dashboardDensity.solution:Prioritise current balance, budget progress and recent activity with progressive detail.`,
  //       result: $localize`:@@project.data.deedscash.challenges.dashboardDensity.result:A calmer interface that supports both quick checks and deeper reviews.`,
  //     },
  //   ],
  //   showcase: [
  //     {
  //       id: 'overview-dashboard',
  //       eyebrow: $localize`:@@project.data.deedscash.showcase.dashboard.eyebrow:Financial overview`,
  //       title: $localize`:@@project.data.deedscash.showcase.dashboard.title:A dashboard built for quick decisions`,
  //       description: $localize`:@@project.data.deedscash.showcase.dashboard.description:Balances, budget progress and recent activity share a clear hierarchy that makes the next useful action easy to recognise.`,
  //       image: {
  //         src: 'images/projects/1785012012152.png',
  //         alt: $localize`:@@project.data.deedscash.showcase.dashboard.alt:DeedsCash financial overview dashboard`,
  //         width: 1600,
  //         height: 900,
  //       },
  //     },
  //     {
  //       id: 'budget-detail',
  //       eyebrow: $localize`:@@project.data.deedscash.showcase.budget.eyebrow:From plan to progress`,
  //       title: $localize`:@@project.data.deedscash.showcase.budget.title:Budgets that remain easy to understand`,
  //       description: $localize`:@@project.data.deedscash.showcase.budget.description:Category limits and actual spending appear together so users can adjust their plan before small deviations become problems.`,
  //       image: {
  //         src: 'images/projects/1785012012152.png',
  //         alt: $localize`:@@project.data.deedscash.showcase.budget.alt:DeedsCash monthly budget detail`,
  //         width: 1600,
  //         height: 900,
  //       },
  //     },
  //   ],
  //   engineering: [
  //     {
  //       id: 'security',
  //       category: 'Security',
  //       description: $localize`:@@project.data.deedscash.engineering.security.description:Layered controls protect financial data and account ownership.`,
  //       highlights: [
  //         $localize`:@@project.data.deedscash.engineering.security.item1:Server-side authorisation`,
  //         $localize`:@@project.data.deedscash.engineering.security.item2:Validated financial commands`,
  //         $localize`:@@project.data.deedscash.engineering.security.item3:Protected account boundaries`,
  //       ],
  //     },
  //     {
  //       id: 'performance',
  //       category: 'Performance',
  //       description: $localize`:@@project.data.deedscash.engineering.performance.description:Focused queries keep transaction lists and summaries responsive.`,
  //       highlights: [
  //         $localize`:@@project.data.deedscash.engineering.performance.item1:Paginated transaction history`,
  //         $localize`:@@project.data.deedscash.engineering.performance.item2:Indexed account queries`,
  //         $localize`:@@project.data.deedscash.engineering.performance.item3:Cached monthly summaries`,
  //       ],
  //     },
  //     {
  //       id: 'testing',
  //       category: 'Testing',
  //       description: $localize`:@@project.data.deedscash.engineering.testing.description:Automated tests concentrate on monetary calculations and account isolation.`,
  //       highlights: [
  //         $localize`:@@project.data.deedscash.engineering.testing.item1:Budget rule unit tests`,
  //         $localize`:@@project.data.deedscash.engineering.testing.item2:API integration scenarios`,
  //         $localize`:@@project.data.deedscash.engineering.testing.item3:Balance regression coverage`,
  //       ],
  //     },
  //     {
  //       id: 'observability',
  //       category: 'Observability',
  //       description: $localize`:@@project.data.deedscash.engineering.observability.description:Operational signals expose failures without recording sensitive financial details.`,
  //       highlights: [
  //         $localize`:@@project.data.deedscash.engineering.observability.item1:Structured event logs`,
  //         $localize`:@@project.data.deedscash.engineering.observability.item2:Application health checks`,
  //         $localize`:@@project.data.deedscash.engineering.observability.item3:Transaction error monitoring`,
  //       ],
  //     },
  //   ],
  //   lessons: {
  //     learnings: [
  //       $localize`:@@project.data.deedscash.lessons.learning1:Financial interfaces become clearer when totals are connected to the decisions they support.`,
  //       $localize`:@@project.data.deedscash.lessons.learning2:Money calculations need explicit types and focused tests from the beginning.`,
  //       $localize`:@@project.data.deedscash.lessons.learning3:Progressive detail makes dense transaction history useful on smaller screens.`,
  //     ],
  //     nextSteps: [
  //       $localize`:@@project.data.deedscash.lessons.nextStep1:Add automatic bank transaction imports.`,
  //       $localize`:@@project.data.deedscash.lessons.nextStep2:Introduce shared household budgets and permissions.`,
  //       $localize`:@@project.data.deedscash.lessons.nextStep3:Expand forecasting with transparent recurring-expense projections.`,
  //     ],
  //   },
  //   previousProject: {
  //     label: 'Glicare',
  //     path: '../glicare',
  //   },
  //   nextProject: {
  //     label: 'E-Commerce',
  //     path: '../e-commerce',
  //   },
  // },
  // {
  //   id: 'e-commerce',
  //   slug: 'e-commerce',

  //   name: 'E-Commerce',
  //   title: 'E-Commerce',
  //   subtitle: $localize`:@@project.data.ecommerce.subtitle:A scalable storefront for complex product catalogues and high-volume sales.`,
  //   shortDescription: $localize`:@@project.data.ecommerce.shortDescription:A complete commerce experience that connects product discovery, advanced search, personalised recommendations, inventory visibility, promotions, secure checkout and order tracking in one responsive storefront designed to remain clear and dependable even as catalogue size, customer traffic and operational complexity grow.`,
  //   description: $localize`:@@project.data.ecommerce.description:This fictional e-commerce platform supports the complete shopping journey, from catalogue exploration and product comparison to payment, fulfilment and post-purchase service, while giving operations teams dependable tools for inventory and order management.`,
  //   featured: true,

  //   category: $localize`:@@project.data.ecommerce.category:Digital commerce platform`,
  //   type: $localize`:@@project.data.ecommerce.type:Responsive storefront and operations portal`,
  //   role: $localize`:@@project.data.ecommerce.role:Full-stack development, solution architecture & product design`,
  //   summary: $localize`:@@project.data.ecommerce.summary:A modular shopping experience that helps customers find the right product quickly while keeping pricing, stock, payment and fulfilment workflows consistent.`,
  //   outcome: $localize`:@@project.data.ecommerce.outcome:Higher checkout completion and more efficient catalogue and order operations`,

  //   status: $localize`:@@project.data.ecommerce.status:Completed`,
  //   completed: false,
  //   timeline: $localize`:@@project.data.ecommerce.timeline:10 months`,
  //   year: {
  //     startYear: 2024,
  //     endYear: 2025,
  //   },
  //   technologies: [
  //     TECHNOLOGIES.angular,
  //     TECHNOLOGIES.typeScript,
  //     TECHNOLOGIES.nodejs,
  //     TECHNOLOGIES.mongoDb,
  //     TECHNOLOGIES.redis,
  //     TECHNOLOGIES.docker,
  //     TECHNOLOGIES.aws,
  //   ],
  //   url: 'https://...',
  //   liveUrl: 'https://...',
  //   repositoryUrl: 'https://github.com/...',

  //   coverImage: {
  //     src: 'images/projects/1785012012152.png',
  //     alt: $localize`:@@project.data.ecommerce.coverImageAlt:E-Commerce storefront presentation`,
  //     width: 1600,
  //     height: 900,
  //   },
  //   seoImage: {
  //     src: 'images/projects/1785012012152.png',
  //     alt: $localize`:@@project.data.ecommerce.seoImageAlt:E-Commerce product catalogue and checkout`,
  //     width: 1600,
  //     height: 900,
  //   },
  //   heroImage: {
  //     src: 'images/projects/1785012012152.png',
  //     alt: $localize`:@@project.data.ecommerce.heroImageAlt:E-Commerce platform presentation`,
  //     width: 1600,
  //     height: 900,
  //   },

  //   overview: {
  //     context: $localize`:@@project.data.ecommerce.overview.context:Growing retailers frequently manage catalogue, stock, campaigns and orders across disconnected tools that expose customers to outdated information and inconsistent journeys.`,
  //     problem: $localize`:@@project.data.ecommerce.overview.problem:Customers needed fast product discovery and a trustworthy checkout, while operations teams needed stock and order changes to remain accurate during traffic peaks.`,
  //     solution: $localize`:@@project.data.ecommerce.overview.solution:The platform combines a performance-focused Angular storefront with modular commerce services, searchable product data, cached availability and observable order workflows.`,
  //   },
  //   features: [
  //     {
  //       id: 'catalogue-discovery',
  //       title: $localize`:@@project.data.ecommerce.features.catalogueDiscovery.title:Catalogue discovery`,
  //       description: $localize`:@@project.data.ecommerce.features.catalogueDiscovery.description:Search, filters and categories help customers narrow large product collections quickly.`,
  //     },
  //     {
  //       id: 'product-comparison',
  //       title: $localize`:@@project.data.ecommerce.features.productComparison.title:Product comparison`,
  //       description: $localize`:@@project.data.ecommerce.features.productComparison.description:Comparable attributes and availability make complex purchase decisions easier.`,
  //     },
  //     {
  //       id: 'shopping-cart',
  //       title: $localize`:@@project.data.ecommerce.features.shoppingCart.title:Persistent shopping cart`,
  //       description: $localize`:@@project.data.ecommerce.features.shoppingCart.description:Cart state remains consistent across sessions while prices and stock are revalidated.`,
  //     },
  //     {
  //       id: 'secure-checkout',
  //       title: $localize`:@@project.data.ecommerce.features.secureCheckout.title:Secure checkout`,
  //       description: $localize`:@@project.data.ecommerce.features.secureCheckout.description:A guided flow coordinates delivery, promotion, payment and confirmation steps.`,
  //     },
  //     {
  //       id: 'order-tracking',
  //       title: $localize`:@@project.data.ecommerce.features.orderTracking.title:Order tracking`,
  //       description: $localize`:@@project.data.ecommerce.features.orderTracking.description:Customers follow fulfilment progress through clear, timely status updates.`,
  //     },
  //     {
  //       id: 'operations-console',
  //       title: $localize`:@@project.data.ecommerce.features.operationsConsole.title:Operations console`,
  //       description: $localize`:@@project.data.ecommerce.features.operationsConsole.description:Teams manage products, inventory and exceptional orders from one role-aware workspace.`,
  //     },
  //   ],
  //   stack: [
  //     {
  //       id: 'frontend',
  //       name: $localize`:@@project.data.ecommerce.stack.frontend.name:Front-end`,
  //       technologies: [
  //         {
  //           id: TECHNOLOGIES.angular.id,
  //           technology: TECHNOLOGIES.angular,
  //           description: $localize`:@@project.data.ecommerce.stack.angular:Storefront composition, route-level experiences and reactive cart state.`,
  //         },
  //         {
  //           id: TECHNOLOGIES.typeScript.id,
  //           technology: TECHNOLOGIES.typeScript,
  //           description: $localize`:@@project.data.ecommerce.stack.typescript:Strict contracts for products, pricing, checkout and order state.`,
  //         },
  //       ],
  //     },
  //     {
  //       id: 'backend',
  //       name: $localize`:@@project.data.ecommerce.stack.backend.name:Back-end`,
  //       technologies: [
  //         {
  //           id: TECHNOLOGIES.nodejs.id,
  //           technology: TECHNOLOGIES.nodejs,
  //           description: $localize`:@@project.data.ecommerce.stack.nodejs:Modular APIs for catalogue, cart, checkout and order operations.`,
  //         },
  //         {
  //           id: TECHNOLOGIES.javaScript.id,
  //           technology: TECHNOLOGIES.javaScript,
  //           description: $localize`:@@project.data.ecommerce.stack.javascript:Server-side integrations and asynchronous commerce workflows.`,
  //         },
  //       ],
  //     },
  //     {
  //       id: 'data',
  //       name: $localize`:@@project.data.ecommerce.stack.data.name:Data`,
  //       technologies: [
  //         {
  //           id: TECHNOLOGIES.mongoDb.id,
  //           technology: TECHNOLOGIES.mongoDb,
  //           description: $localize`:@@project.data.ecommerce.stack.mongodb:Flexible catalogue storage for varied product attributes.`,
  //         },
  //         {
  //           id: TECHNOLOGIES.redis.id,
  //           technology: TECHNOLOGIES.redis,
  //           description: $localize`:@@project.data.ecommerce.stack.redis:Fast access to sessions, carts and frequently requested catalogue data.`,
  //         },
  //       ],
  //     },
  //     {
  //       id: 'infrastructure',
  //       name: $localize`:@@project.data.ecommerce.stack.infrastructure.name:Infrastructure`,
  //       technologies: [
  //         {
  //           id: TECHNOLOGIES.docker.id,
  //           technology: TECHNOLOGIES.docker,
  //           description: $localize`:@@project.data.ecommerce.stack.docker:Isolated services and consistent delivery environments.`,
  //         },
  //         {
  //           id: TECHNOLOGIES.aws.id,
  //           technology: TECHNOLOGIES.aws,
  //           description: $localize`:@@project.data.ecommerce.stack.aws:Elastic hosting, object storage and managed operational services.`,
  //         },
  //       ],
  //     },
  //     {
  //       id: 'testing',
  //       name: $localize`:@@project.data.ecommerce.stack.testing.name:Testing`,
  //       technologies: [
  //         {
  //           id: TECHNOLOGIES.cucumber.id,
  //           technology: TECHNOLOGIES.cucumber,
  //           description: $localize`:@@project.data.ecommerce.stack.cucumber:Behaviour scenarios for catalogue, checkout and fulfilment journeys.`,
  //         },
  //       ],
  //     },
  //   ],
  //   architecture: {
  //     description: $localize`:@@project.data.ecommerce.architecture.description:A modular commerce architecture keeps the storefront independent from catalogue, cart, checkout and order capabilities. Cached read paths serve browsing traffic efficiently while durable workflows preserve purchase consistency.`,
  //     components: [
  //       {
  //         id: 'storefront',
  //         name: $localize`:@@project.data.ecommerce.architecture.storefront.name:Angular storefront`,
  //         description: $localize`:@@project.data.ecommerce.architecture.storefront.description:Product discovery, cart and checkout experiences`,
  //       },
  //       {
  //         id: 'commerce-api',
  //         name: $localize`:@@project.data.ecommerce.architecture.api.name:Commerce API`,
  //         description: $localize`:@@project.data.ecommerce.architecture.api.description:Pricing, inventory and order orchestration`,
  //       },
  //       {
  //         id: 'catalogue',
  //         name: $localize`:@@project.data.ecommerce.architecture.catalogue.name:Catalogue service`,
  //         description: $localize`:@@project.data.ecommerce.architecture.catalogue.description:Product attributes, search data and merchandising`,
  //       },
  //       {
  //         id: 'data-platform',
  //         name: $localize`:@@project.data.ecommerce.architecture.data.name:Commerce data layer`,
  //         description: $localize`:@@project.data.ecommerce.architecture.data.description:Durable catalogue records with fast cached access`,
  //       },
  //     ],
  //   },
  //   workflow: [
  //     {
  //       id: 'discover',
  //       title: $localize`:@@project.data.ecommerce.workflow.discover.title:Discover`,
  //       description: $localize`:@@project.data.ecommerce.workflow.discover.description:The customer searches, filters and compares relevant products.`,
  //     },
  //     {
  //       id: 'configure',
  //       title: $localize`:@@project.data.ecommerce.workflow.configure.title:Configure`,
  //       description: $localize`:@@project.data.ecommerce.workflow.configure.description:Selected variants and quantities are validated against current availability.`,
  //     },
  //     {
  //       id: 'purchase',
  //       title: $localize`:@@project.data.ecommerce.workflow.purchase.title:Purchase`,
  //       description: $localize`:@@project.data.ecommerce.workflow.purchase.description:The checkout coordinates pricing, delivery details and payment authorisation.`,
  //     },
  //     {
  //       id: 'fulfil',
  //       title: $localize`:@@project.data.ecommerce.workflow.fulfil.title:Fulfil`,
  //       description: $localize`:@@project.data.ecommerce.workflow.fulfil.description:The confirmed order moves through preparation, dispatch and delivery updates.`,
  //     },
  //   ],
  //   decisions: [
  //     {
  //       id: 'modular-domains',
  //       title: $localize`:@@project.data.ecommerce.decisions.modularDomains.title:Modular commerce domains`,
  //       decision: $localize`:@@project.data.ecommerce.decisions.modularDomains.decision:Separate catalogue, cart, checkout and order responsibilities.`,
  //       rationale: $localize`:@@project.data.ecommerce.decisions.modularDomains.rationale:Clear ownership limits coupling and allows high-change capabilities to evolve independently.`,
  //     },
  //     {
  //       id: 'stock-validation',
  //       title: $localize`:@@project.data.ecommerce.decisions.stockValidation.title:Authoritative stock validation`,
  //       decision: $localize`:@@project.data.ecommerce.decisions.stockValidation.decision:Revalidate price and inventory at checkout rather than trusting cart snapshots.`,
  //       rationale: $localize`:@@project.data.ecommerce.decisions.stockValidation.rationale:Customers need accurate purchase terms even when products or promotions change during a session.`,
  //     },
  //     {
  //       id: 'read-optimisation',
  //       title: $localize`:@@project.data.ecommerce.decisions.readOptimisation.title:Optimised catalogue reads`,
  //       decision: $localize`:@@project.data.ecommerce.decisions.readOptimisation.decision:Cache frequently accessed catalogue views while keeping purchase operations consistent.`,
  //       rationale: $localize`:@@project.data.ecommerce.decisions.readOptimisation.rationale:Browsing represents most traffic and benefits from fast reads without weakening checkout guarantees.`,
  //     },
  //   ],
  //   challenges: [
  //     {
  //       id: 'inventory-races',
  //       title: $localize`:@@project.data.ecommerce.challenges.inventoryRaces.title:Handling competing purchases`,
  //       challenge: $localize`:@@project.data.ecommerce.challenges.inventoryRaces.challenge:Several customers can attempt to buy the final available units at nearly the same time.`,
  //       solution: $localize`:@@project.data.ecommerce.challenges.inventoryRaces.solution:Use authoritative reservations, idempotent commands and explicit expiration rules during checkout.`,
  //       result: $localize`:@@project.data.ecommerce.challenges.inventoryRaces.result:Predictable stock allocation with fewer overselling and duplicate-order failures.`,
  //     },
  //     {
  //       id: 'catalogue-performance',
  //       title: $localize`:@@project.data.ecommerce.challenges.cataloguePerformance.title:Keeping discovery fast at scale`,
  //       challenge: $localize`:@@project.data.ecommerce.challenges.cataloguePerformance.challenge:Large catalogues, rich filters and promotional traffic can make product pages slow or inconsistent.`,
  //       solution: $localize`:@@project.data.ecommerce.challenges.cataloguePerformance.solution:Build optimised read models, cache stable responses and load non-critical interface elements progressively.`,
  //       result: $localize`:@@project.data.ecommerce.challenges.cataloguePerformance.result:A responsive shopping journey that remains useful during catalogue growth and demand peaks.`,
  //     },
  //   ],
  //   showcase: [
  //     {
  //       id: 'catalogue',
  //       eyebrow: $localize`:@@project.data.ecommerce.showcase.catalogue.eyebrow:Find the right product`,
  //       title: $localize`:@@project.data.ecommerce.showcase.catalogue.title:Discovery designed for large catalogues`,
  //       description: $localize`:@@project.data.ecommerce.showcase.catalogue.description:Search, filters, product summaries and availability signals work together without overwhelming customers with unnecessary detail.`,
  //       image: {
  //         src: 'images/projects/1785012012152.png',
  //         alt: $localize`:@@project.data.ecommerce.showcase.catalogue.alt:E-Commerce searchable product catalogue`,
  //         width: 1600,
  //         height: 900,
  //       },
  //     },
  //     {
  //       id: 'checkout',
  //       eyebrow: $localize`:@@project.data.ecommerce.showcase.checkout.eyebrow:Confident completion`,
  //       title: $localize`:@@project.data.ecommerce.showcase.checkout.title:A checkout that explains every step`,
  //       description: $localize`:@@project.data.ecommerce.showcase.checkout.description:Order totals, delivery choices and payment status remain visible throughout a guided flow that prevents surprises before confirmation.`,
  //       image: {
  //         src: 'images/projects/1785012012152.png',
  //         alt: $localize`:@@project.data.ecommerce.showcase.checkout.alt:E-Commerce secure checkout flow`,
  //         width: 1600,
  //         height: 900,
  //       },
  //     },
  //   ],
  //   engineering: [
  //     {
  //       id: 'security',
  //       category: 'Security',
  //       description: $localize`:@@project.data.ecommerce.engineering.security.description:Layered controls protect customer identity, order data and payment boundaries.`,
  //       highlights: [
  //         $localize`:@@project.data.ecommerce.engineering.security.item1:Tokenised payment integration`,
  //         $localize`:@@project.data.ecommerce.engineering.security.item2:Role-based operations access`,
  //         $localize`:@@project.data.ecommerce.engineering.security.item3:Validated checkout commands`,
  //       ],
  //     },
  //     {
  //       id: 'performance',
  //       category: 'Performance',
  //       description: $localize`:@@project.data.ecommerce.engineering.performance.description:Optimised reads and progressive delivery keep product discovery fast.`,
  //       highlights: [
  //         $localize`:@@project.data.ecommerce.engineering.performance.item1:Cached catalogue responses`,
  //         $localize`:@@project.data.ecommerce.engineering.performance.item2:Responsive image loading`,
  //         $localize`:@@project.data.ecommerce.engineering.performance.item3:Route-level code splitting`,
  //       ],
  //     },
  //     {
  //       id: 'testing',
  //       category: 'Testing',
  //       description: $localize`:@@project.data.ecommerce.engineering.testing.description:Journey-focused automation protects the highest-value commerce paths.`,
  //       highlights: [
  //         $localize`:@@project.data.ecommerce.engineering.testing.item1:Checkout behaviour scenarios`,
  //         $localize`:@@project.data.ecommerce.engineering.testing.item2:Inventory integration tests`,
  //         $localize`:@@project.data.ecommerce.engineering.testing.item3:Idempotency regression coverage`,
  //       ],
  //     },
  //     {
  //       id: 'observability',
  //       category: 'Observability',
  //       description: $localize`:@@project.data.ecommerce.engineering.observability.description:Business and technical signals make the order lifecycle easier to understand.`,
  //       highlights: [
  //         $localize`:@@project.data.ecommerce.engineering.observability.item1:Correlated order events`,
  //         $localize`:@@project.data.ecommerce.engineering.observability.item2:Checkout conversion metrics`,
  //         $localize`:@@project.data.ecommerce.engineering.observability.item3:Inventory failure alerts`,
  //       ],
  //     },
  //   ],
  //   lessons: {
  //     learnings: [
  //       $localize`:@@project.data.ecommerce.lessons.learning1:Catalogue speed and checkout consistency require different optimisation strategies.`,
  //       $localize`:@@project.data.ecommerce.lessons.learning2:Idempotent workflows are essential when payments, inventory and fulfilment cross service boundaries.`,
  //       $localize`:@@project.data.ecommerce.lessons.learning3:Clear availability and pricing feedback builds more trust than hiding operational complexity.`,
  //     ],
  //     nextSteps: [
  //       $localize`:@@project.data.ecommerce.lessons.nextStep1:Add personalised recommendations with explainable relevance signals.`,
  //       $localize`:@@project.data.ecommerce.lessons.nextStep2:Introduce regional catalogues, currencies and fulfilment rules.`,
  //       $localize`:@@project.data.ecommerce.lessons.nextStep3:Expand the operations portal with returns and exchange workflows.`,
  //     ],
  //   },
  //   previousProject: {
  //     label: 'DeedsCash',
  //     path: '../deedscash',
  //   },
  //   nextProject: {
  //     label: 'Glicare',
  //     path: '../glicare',
  //   },
  // },
];
