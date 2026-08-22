import { Component, DOCUMENT, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../../shared/models/project.model';
import { RevealOnScroll } from '../../../shared/directives/reveal-on-scroll';
import { SeoService } from '../../../core/services/seo/seo.service';
import { Locale } from '../../../shared/i18n/locales';
import { ROUTES } from '../../../shared/i18n/routes';

@Component({
  selector: 'app-project-details',
  imports: [RevealOnScroll],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetails {
  private readonly document = inject(DOCUMENT);
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  protected readonly project = this.route.snapshot.data['project'] as Project;

  private get currentLocale(): Locale {
    return this.document.documentElement.lang as Locale;
  }

  public constructor() {
    this.seo.updateSeo({
      indexable: true,
      title: `${this.project.name} | ${this.project.category} | Welder Ressutti`,
      description: this.project.description,
      currentLocale: this.currentLocale,
      path: ROUTES.projects,
      slug: this.project.slug,
      image: 'images/seo/pages/wr-logo-frame-gradient-seo-image.webp',
      imageAlt: $localize`:@@projects.details.seo.imageAlt:WR logo for Welder Ressutti — ressutti.com`,
      openGraphType: 'website',
      jsonLdType: 'WebPage',
    });
  }
}
