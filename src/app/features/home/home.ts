import { Component } from '@angular/core';
import { Hero } from "./sections/hero/hero";
import { Projects } from './sections/projects/projects';
import { Stacks } from './sections/stacks/stacks';

@Component({
  selector: 'app-home',
  imports: [Hero, Projects, Stacks],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
