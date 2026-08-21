import { Component, inject, DOCUMENT } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../core/services/project/project.service';
import { SeoService } from '../../core/services/seo/seo.service';
import { ProjectListCard } from './project-list-card/project-list-card';
import { Locale } from '../../shared/i18n/locales';
import { ROUTES } from '../../shared/i18n/routes';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-projects',
  imports: [ProjectListCard, RouterLink, RevealOnScroll],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private readonly document = inject(DOCUMENT);
  private readonly projectService = inject(ProjectService);
  private readonly seo = inject(SeoService);
  protected readonly currentLocale = this.currentLocaleHtml;
  protected readonly projects = this.projectService.getAllProjects();
  protected readonly contactMeButtonPath = `/${ROUTES.contact[this.currentLocale]}`;

  private get currentLocaleHtml(): Locale {
    return this.document.documentElement.lang as Locale;
  }

  constructor() {
    this.seo.updateSeo({
      title: $localize`:@@projects.seo.title:Full-stack Projects | Angular + Spring | Ressutti.dev`,
      description: $localize`:@@projects.seo.description:Explore full-stack web applications by Welder Ressutti, with context on product goals, Angular and Spring architecture, responsibilities and engineering decisions.`,
      currentLocale: this.currentLocale,
      path: ROUTES.projects,
      image: 'images/seo/pages/wr-logo-frame-gradient-seo-image.webp',
      imageAlt: $localize`:@@projects.seo.imageAlt:Selection of web development projects by Welder Ressutti.`,
      openGraphType: 'website',
      jsonLdType: 'CollectionPage',
    });
  }
}
