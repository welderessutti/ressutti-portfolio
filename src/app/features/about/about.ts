import { Component, DOCUMENT, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo/seo.service';
import { Locale } from '../../shared/i18n/locales';
import { ROUTES } from '../../shared/i18n/routes';

interface ProfessionalPrinciple {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}

interface SkillGroup {
  readonly id: string;
  readonly title: string;
  readonly skills: readonly string[];
}

interface EducationItem {
  readonly id: string;
  readonly qualification: string;
  readonly description: string;
  readonly secondary?: boolean;
}

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private readonly document = inject(DOCUMENT);
  private readonly seo = inject(SeoService);

  protected readonly currentLocale = this.document.documentElement.lang as Locale;
  protected readonly projectsPath = ROUTES.projects[this.currentLocale];
  protected readonly contactPath = ROUTES.contact[this.currentLocale];

  protected readonly principles: readonly ProfessionalPrinciple[] = [
    {
      id: 'clarity',
      title: $localize`:@@about.principles.clarity.title:Clarity before complexity`,
      description: $localize`:@@about.principles.clarity.description:I make responsibilities and trade-offs explicit before adding abstractions, keeping solutions understandable and proportionate to the problem.`,
    },
    {
      id: 'architecture',
      title: $localize`:@@about.principles.architecture.title:Architecture guided by need`,
      description: $localize`:@@about.principles.architecture.description:I consider scale, risks and expected evolution before choosing between a simpler design and a distributed approach.`,
    },
    {
      id: 'quality',
      title: $localize`:@@about.principles.quality.title:Quality throughout development`,
      description: $localize`:@@about.principles.quality.description:Testing, security and maintainability are part of implementation from the beginning, not activities left until the end.`,
    },
    {
      id: 'evolution',
      title: $localize`:@@about.principles.evolution.title:Reliable, incremental evolution`,
      description: $localize`:@@about.principles.evolution.description:I favour small, verifiable improvements that reduce regressions and allow software to evolve with confidence.`,
    },
  ];

  protected readonly skillGroups: readonly SkillGroup[] = [
    {
      id: 'frontend',
      title: $localize`:@@about.capabilities.frontend.title:Front-end`,
      skills: [
        $localize`:@@about.capabilities.frontend.angular:Angular and TypeScript`,
        $localize`:@@about.capabilities.frontend.responsive:Responsive web applications`,
        $localize`:@@about.capabilities.frontend.rest:REST API integration`,
        $localize`:@@about.capabilities.frontend.structure:Component and feature organisation`,
        $localize`:@@about.capabilities.frontend.auth:Client-side authentication and authorisation`,
      ],
    },
    {
      id: 'backend',
      title: $localize`:@@about.capabilities.backend.title:Back-end`,
      skills: [
        $localize`:@@about.capabilities.backend.java:Java and Spring`,
        'REST APIs',
        $localize`:@@about.capabilities.backend.architectures:Monolithic applications and microservices`,
        $localize`:@@about.capabilities.backend.jwt:JWT authentication and authorisation`,
        $localize`:@@about.capabilities.backend.integration:Service integration`,
      ],
    },
    {
      id: 'architecture',
      title: $localize`:@@about.capabilities.architecture.title:Architecture and integration`,
      skills: [
        $localize`:@@about.capabilities.architecture.communication:Synchronous and asynchronous communication`,
        $localize`:@@about.capabilities.architecture.messaging:Messaging`,
        'API Gateway',
        $localize`:@@about.capabilities.architecture.discovery:Service discovery and load balancing`,
        $localize`:@@about.capabilities.architecture.delivery:Containers and cloud deployment`,
      ],
    },
    {
      id: 'quality',
      title: $localize`:@@about.capabilities.quality.title:Quality`,
      skills: [
        $localize`:@@about.capabilities.quality.unit:Unit and integration testing`,
        $localize`:@@about.capabilities.quality.system:System and end-to-end testing`,
        $localize`:@@about.capabilities.quality.behaviour:Behaviour testing`,
        $localize`:@@about.capabilities.quality.regressions:Security and regression prevention`,
        $localize`:@@about.capabilities.quality.code:Maintainable code`,
      ],
    },
  ];

  protected readonly education: readonly EducationItem[] = [
    {
      id: 'systems',
      qualification: $localize`:@@about.education.systems.title:Systems Analysis and Development`,
      description: $localize`:@@about.education.systems.description:Undergraduate degree`,
    },
    {
      id: 'java',
      qualification: $localize`:@@about.education.java.title:Java Architecture and Development`,
      description: $localize`:@@about.education.java.description:Postgraduate qualification`,
    },
    {
      id: 'biomedicine',
      qualification: $localize`:@@about.education.biomedicine.title:Biomedicine`,
      description: $localize`:@@about.education.biomedicine.description:Previous academic background that supports an analytical, responsible and process-oriented approach to professional work.`,
      secondary: true,
    },
  ];

  public constructor() {
    this.seo.updateSeo({
      title: $localize`:@@about.seo.title:About Welder Ressutti | Ressutti.dev`,
      description: $localize`:@@about.seo.description:Learn about Welder Ressutti, a full-stack software developer building reliable web applications with Angular, Java and Spring.`,
      image: '/favicon.ico',
      imageAlt: $localize`:@@about.seo.imageAlt:Ressutti.dev portfolio logo.`,
      path: ROUTES.about,
      openGraphType: 'profile',
      jsonLdType: 'AboutPage',
    });
  }
}
