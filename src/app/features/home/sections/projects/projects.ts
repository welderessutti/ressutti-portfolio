import { Component, inject, computed } from '@angular/core';
import { ProjectCard } from './project-card/project-card';
import { Project } from './project.model';
import { RevealOnScroll } from '../../../../shared/directives/reveal-on-scroll';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, RevealOnScroll],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly translation = inject(TranslationService);
  protected readonly projects = computed<Project[]>(() =>
    this.translation.tObjectArray<Project>('projects.items'),
  );
}
