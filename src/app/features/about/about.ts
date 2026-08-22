import { Component, DOCUMENT, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo/seo.service';
import { Locale } from '../../shared/i18n/locales';
import { ROUTES } from '../../shared/i18n/routes';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

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
  imports: [RouterLink, RevealOnScroll],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  private readonly document = inject(DOCUMENT);
  private readonly seo = inject(SeoService);

  protected readonly currentLocale = this.currentLocaleHtml;
  protected readonly projectsPath = `/${ROUTES.projects[this.currentLocale]}`;
  protected readonly contactPath = `/${ROUTES.contact[this.currentLocale]}`;

  private get currentLocaleHtml(): Locale {
    return this.document.documentElement.lang as Locale;
  }

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
      title: $localize`:@@about.capabilities.frontEnd.title:Front-end`,
      skills: [
        $localize`:@@about.capabilities.frontEnd.angular:Angular and TypeScript`,
        $localize`:@@about.capabilities.frontEnd.responsive:Responsive web applications`,
        $localize`:@@about.capabilities.frontEnd.rest:REST API integration`,
        $localize`:@@about.capabilities.frontEnd.structure:Component and feature organisation`,
        $localize`:@@about.capabilities.frontEnd.auth:Stateless authentication and authorisation`,
      ],
    },
    {
      id: 'backend',
      title: $localize`:@@about.capabilities.backEnd.title:Back-end`,
      skills: [
        $localize`:@@about.capabilities.backEnd.spring:Spring and Java`,
        'REST APIs',
        $localize`:@@about.capabilities.backEnd.architectures:Monolithic applications and microservices`,
        $localize`:@@about.capabilities.backEnd.jwt:JWT authentication and authorisation`,
        $localize`:@@about.capabilities.backEnd.integration:Service integration`,
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
      id: 'java',
      qualification: $localize`:@@about.education.java.title:Java Architecture and Development`,
      description: $localize`:@@about.education.java.description:Postgraduate degree`,
    },
    {
      id: 'systems',
      qualification: $localize`:@@about.education.systems.title:Systems Analysis and Development`,
      description: $localize`:@@about.education.systems.description:Associate degree`,
    },
    {
      id: 'biomedicine',
      qualification: $localize`:@@about.education.biomedicine.title:Biomedicine`,
      description: $localize`:@@about.education.biomedicine.description:Bachelor's degree`,
    },
    {
      id: 'environmental',
      qualification: $localize`:@@about.education.environmental.title:Environmental Management`,
      description: $localize`:@@about.education.environmental.description:Associate degree`,
    },
  ];

  public constructor() {
    this.seo.updateSeo({
      indexable: true,
      title: $localize`:@@about.seo.title:About | Welder Ressutti | Full-Stack Developer`,
      description: $localize`:@@about.seo.description:Learn about Welder Ressutti's path from biomedicine to full-stack development, including his education, working principles and focus on Angular and Spring.`,
      currentLocale: this.currentLocale,
      path: ROUTES.about,
      image: 'images/seo/pages/wr-logo-frame-gradient-seo-image.webp',
      imageAlt: $localize`:@@about.seo.imageAlt:WR logo for Welder Ressutti — ressutti.com`,
      openGraphType: 'website',
      jsonLdType: 'WebPage',
    });
  }
}
