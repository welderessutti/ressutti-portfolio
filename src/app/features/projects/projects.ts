import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectService } from '../../core/services/project/project.service';
import { SeoService } from '../../core/services/seo/seo.service';
import { ProjectListCard } from './project-list-card/project-list-card';

@Component({
  selector: 'app-projects',
  imports: [ProjectListCard, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private readonly projectService = inject(ProjectService);
  private readonly seo = inject(SeoService);

  protected readonly projects = this.projectService.getAllProjects();
  protected readonly contactMeButtonPath = $localize`:@@projects.contactMeButton.path:contact`;

  constructor() {
    this.seo.updateSeo({
      title: $localize`:@@projects.seo.title:Projects | Ressutti.dev`,
      description: $localize`:@@projects.seo.description:Explore web applications developed by Welder Ressutti, including their purpose, technologies, responsibilities and outcomes.`,
      image: '/assets/images/seo/projects.webp',
      imageAlt: $localize`:@@projects.seo.imageAlt:Selection of web development projects by Welder Ressutti.`,
      path: $localize`:@@projects.seo.path:/projects`,
      openGraphType: 'website',
      jsonLdType: 'CollectionPage',
    });
  }
}
