import { Component } from '@angular/core';
import { RevealOnScroll } from '../../../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-about',
  imports: [RevealOnScroll],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
