import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Stacks } from './sections/stacks/stacks';
import { About } from './sections/about/about';

@Component({
  selector: 'app-home',
  imports: [Hero, Projects, Stacks, About],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
