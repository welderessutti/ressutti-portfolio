import { Component, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo/seo.service';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Stacks } from './sections/stacks/stacks';
import { About } from './sections/about/about';
import { ROUTES } from '../../shared/i18n/routes';

@Component({
  selector: 'app-home',
  imports: [Hero, Projects, Stacks, About],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.updateSeo({
      title: $localize`:@@home.seo.title:Full-stack Developer | Angular + Spring | Ressutti.dev`,
      description: $localize`:@@home.seo.description:Portfolio of Welder Ressutti, a full-stack developer specialising in modern, scalable and robust web applications with Angular and Spring.`,
      image: '/assets/images/seo/home.png',
      imageAlt: $localize`:@@home.seo.alt:Home page of Ressutti.dev portfolio.`,
      path: ROUTES.home,
      openGraphType: 'website',
      jsonLdType: 'WebPage',
    });
  }
}
