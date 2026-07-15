import { Component, inject, DOCUMENT } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCard } from './project-card/project-card';
import { RevealOnScroll } from '../../../../shared/directives/reveal-on-scroll';
import { ProjectService } from '../../../../core/services/project/project.service';
import { Locale } from '../../../../shared/i18n/locales';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, RevealOnScroll, RouterLink],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  private readonly document = inject(DOCUMENT);
  private readonly project = inject(ProjectService);
  protected readonly currentLocale = this.currentLocaleHtml;
  protected readonly viewAllProjectsButtonPath = $localize`:@@home.projects.viewAllProjectsButton.path:projects`;
  protected readonly allProjects = this.project.getAllProjects();

  private get currentLocaleHtml(): Locale {
    return this.document.documentElement.lang as Locale;
  }
}
