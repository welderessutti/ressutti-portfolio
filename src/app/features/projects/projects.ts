import { Component, inject, DOCUMENT } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../core/services/project/project.service';
import { SeoService } from '../../core/services/seo/seo.service';
import { ProjectListCard } from './project-list-card/project-list-card';
import { Locale } from '../../shared/i18n/locales';
import { ROUTES } from '../../shared/i18n/routes';

@Component({
  selector: 'app-projects',
  imports: [ProjectListCard, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private readonly document = inject(DOCUMENT);
  private readonly projectService = inject(ProjectService);
  private readonly seo = inject(SeoService);
  protected readonly currentLocale = this.currentLocaleHtml;
  protected readonly projects = this.projectService.getAllProjects();
  protected readonly contactMeButtonPath = ROUTES.contact[this.currentLocale];

  private get currentLocaleHtml(): Locale {
    return this.document.documentElement.lang as Locale;
  }

  constructor() {
    this.seo.updateSeo({
      title: $localize`:@@projects.seo.title:Projects | Ressutti.dev`,
      description: $localize`:@@projects.seo.description:Explore web applications developed by Welder Ressutti, including their purpose, technologies, responsibilities and outcomes.`,
      image: '/assets/images/seo/projects.webp',
      imageAlt: $localize`:@@projects.seo.imageAlt:Selection of web development projects by Welder Ressutti.`,
      path: ROUTES.projects,
      openGraphType: 'website',
      jsonLdType: 'CollectionPage',
    });
  }
}
