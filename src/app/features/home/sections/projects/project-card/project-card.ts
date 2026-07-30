import { Component, input, DOCUMENT, inject } from '@angular/core';
import { Project } from '../../../../../shared/models/project.model';
import { RouterLink } from '@angular/router';
import { Locale } from '../../../../../shared/i18n/locales';
import { ROUTES } from '../../../../../shared/i18n/routes';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  private readonly document = inject(DOCUMENT);
  protected readonly currentLocale = this.currentLocaleHtml;
  protected readonly projectsPagePath = ROUTES.projects[this.currentLocale];
  public readonly project = input.required<Project>();

  private get currentLocaleHtml(): Locale {
    return this.document.documentElement.lang as Locale;
  }
}
