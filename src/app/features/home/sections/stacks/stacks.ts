import { Component } from '@angular/core';
import { StackCard } from './stack-card/stack-card';
import { Stack } from '../../../../shared/models/stack.model';
import { RevealOnScroll } from '../../../../shared/directives/reveal-on-scroll';
import { STACKS } from '../../../../shared/data/stacks.data';

@Component({
  selector: 'app-stacks',
  imports: [StackCard, RevealOnScroll],
  templateUrl: './stacks.html',
  styleUrl: './stacks.css',
})
export class Stacks {
  protected readonly stacks: Stack[] = STACKS;
}
