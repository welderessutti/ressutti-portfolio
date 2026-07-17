import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../shared/models/project.model';

@Component({
  selector: 'app-project-list-card',
  imports: [RouterLink],
  templateUrl: './project-list-card.html',
  styleUrl: './project-list-card.css',
})
export class ProjectListCard {
  public readonly project = input.required<Project>();

  protected readonly visibleTechnologies = computed(() => this.project().technologies.slice(0, 5));

  protected readonly hiddenTechnologyCount = computed(() =>
    Math.max(0, this.project().technologies.length - 5),
  );
}
