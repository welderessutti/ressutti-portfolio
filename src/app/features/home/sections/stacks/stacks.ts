import { Component } from '@angular/core';
import { StackCard } from './stack-card/stack-card';
import { Stack } from './stack.model';
import { RevealOnScroll } from '../../../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-stacks',
  imports: [StackCard, RevealOnScroll],
  templateUrl: './stacks.html',
  styleUrl: './stacks.css',
})
export class Stacks {
  protected readonly stacks: Stack[] = [
    {
      id: 'frontend',
      category: 'Frontend',
      stacks: [
        { name: 'Angular', icon: '' },
        { name: 'React', icon: '' },
        { name: 'Vue', icon: '' },
        { name: 'Svelte', icon: '' },
      ],
    },
    {
      id: 'backend',
      category: 'Backend',
      stacks: [
        { name: 'Node.js', icon: '' },
        { name: 'Django', icon: '' },
        { name: 'Spring', icon: '' },
        { name: 'Flask', icon: '' },
      ],
    },
    {
      id: 'database',
      category: $localize`:@@home.stacks.category.database:Database`,
      stacks: [
        { name: 'MySQL', icon: '' },
        { name: 'MongoDB', icon: '' },
        { name: 'PostgreSQL', icon: '' },
        { name: 'Redis', icon: '' },
      ],
    },
    {
      id: 'devops',
      category: 'DevOps',
      stacks: [
        { name: 'Git', icon: '' },
        { name: 'Docker', icon: '' },
        { name: 'AWS', icon: '' },
        { name: 'Azure', icon: '' },
      ],
    },
  ];
}
