import { Component, Input } from '@angular/core';
import { Project } from '../../../../../shared/models/project.model'

@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() project!: Project;
}
