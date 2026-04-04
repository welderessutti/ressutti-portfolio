import { Component } from '@angular/core';
import { ProjectCard } from './project-card/project-card';
import { Project } from './project.model';
import { RevealOnScroll } from '../../../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, RevealOnScroll],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Project 1',
      description: 'Description for Project 1',
      techs: ['Tech 1', 'Tech 2'],
      image: 'assets/images/project1.jpg',
      github: 'https://github.com/user/project1',
      demo: 'https://demo.com/project1',
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2',
      techs: ['Tech 3', 'Tech 4'],
      image: 'assets/images/project2.jpg',
      github: 'https://github.com/user/project2',
      demo: 'https://demo.com/project2',
    },
  ];
}
