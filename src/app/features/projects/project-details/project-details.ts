import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../../shared/models/project.model';
import { RevealOnScroll } from '../../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-project-details',
  imports: [RevealOnScroll],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetails {
  private readonly route = inject(ActivatedRoute);
  protected readonly project = this.route.snapshot.data['project'] as Project;
}
