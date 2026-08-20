import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../../shared/models/project.model';
import { RevealOnScroll } from '../../../shared/directives/reveal-on-scroll';
import { SeoService } from '../../../core/services/seo/seo.service';

@Component({
  selector: 'app-project-details',
  imports: [RevealOnScroll],
  templateUrl: './project-details.html',
  styleUrl: './project-details.css',
})
export class ProjectDetails {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);
  protected readonly project = this.route.snapshot.data['project'] as Project;

  public constructor() {
    this.seo.updateTitle(`${this.project.title} | Ressutti.dev`);
  }
}
