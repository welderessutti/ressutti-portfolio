import { Component, inject, computed } from '@angular/core';
import { StackCard } from './stack-card/stack-card';
import { StackBase, Stack } from './stack.model';
import { RevealOnScroll } from '../../../../shared/directives/reveal-on-scroll';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  selector: 'app-stacks',
  imports: [StackCard, RevealOnScroll],
  templateUrl: './stacks.html',
  styleUrl: './stacks.css',
})
export class Stacks {
  protected readonly translation = inject(TranslationService);
  private readonly rawStacks: StackBase[] = [
    {
      id: 'frontend',
      stacks: [
        { name: 'Angular', icon: '' },
        { name: 'React', icon: '' },
        { name: 'Vue', icon: '' },
        { name: 'Svelte', icon: '' },
      ],
    },
    {
      id: 'backend',
      stacks: [
        { name: 'Node.js', icon: '' },
        { name: 'Django', icon: '' },
        { name: 'Spring', icon: '' },
        { name: 'Flask', icon: '' },
      ],
    },
    {
      id: 'database',
      stacks: [
        { name: 'MySQL', icon: '' },
        { name: 'MongoDB', icon: '' },
        { name: 'PostgreSQL', icon: '' },
        { name: 'Redis', icon: '' },
      ],
    },
    {
      id: 'devops',
      stacks: [
        { name: 'Git', icon: '' },
        { name: 'Docker', icon: '' },
        { name: 'AWS', icon: '' },
        { name: 'Azure', icon: '' },
      ],
    },
  ];

  protected readonly stacks = computed<Stack[]>(() =>
    this.rawStacks.map((stack) => ({
      ...stack,
      category: this.translation.t(`stacks.categories.${stack.id}`),
    })),
  );
}
