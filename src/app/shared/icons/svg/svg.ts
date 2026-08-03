import { Component, input } from '@angular/core';

@Component({
  selector: 'app-svg',
  imports: [],
  templateUrl: './svg.html',
  styleUrl: './svg.css',
})
export class Svg {
  public readonly contact = input.required<String>();
}
