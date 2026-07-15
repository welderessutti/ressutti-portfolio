import { Component, input } from '@angular/core';
import { Stack } from '../stack.model';

@Component({
  selector: 'app-stack-card',
  imports: [],
  templateUrl: './stack-card.html',
  styleUrl: './stack-card.css',
})
export class StackCard {
  public readonly stack = input.required<Stack>();
}
