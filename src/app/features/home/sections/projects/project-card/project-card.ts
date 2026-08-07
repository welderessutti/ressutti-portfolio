import { Component, input } from '@angular/core';
import { Project } from '../../../../../shared/models/project.model';
import { RouterLink } from '@angular/router';
import { Locale } from '../../../../../shared/i18n/locales';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  public readonly projectsPagePath = input.required<string>();
  public readonly project = input.required<Project>();
  public readonly currentLocale = input.required<Locale>();
}
