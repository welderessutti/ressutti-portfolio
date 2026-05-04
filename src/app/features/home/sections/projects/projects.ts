import { Component, inject, computed } from '@angular/core';
import { ProjectCard } from './project-card/project-card';
import { ProjectBase, Project } from './project.model';
import { RevealOnScroll } from '../../../../shared/directives/reveal-on-scroll';
import { TranslationService } from '../../../../core/services/translation/translation.service';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, RevealOnScroll],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly translation = inject(TranslationService);
  private readonly rawProjects: ProjectBase[] = [
    {
      id: 'project1',
      techs: ['Tech 1', 'Tech 2'],
      image: 'assets/images/project1.jpg',
      github: 'https://github.com/user/project1',
      demo: 'https://demo.com/project1',
    },
    {
      id: 'project2',
      techs: ['Tech 3', 'Tech 4'],
      image: 'assets/images/project2.jpg',
      github: 'https://github.com/user/project2',
      demo: 'https://demo.com/project2',
    },
  ];

  protected readonly projects = computed<Project[]>(() =>
    this.rawProjects.map((project) => ({
      ...project,
      title: this.translation.t(`projects.items.${project.id}.title`),
      description: this.translation.t(`projects.items.${project.id}.description`),
    })),
  );
}
