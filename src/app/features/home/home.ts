import { Component, inject, effect } from '@angular/core';
import { SeoService } from '../../core/services/seo/seo.service';
import { TranslationService } from '../../core/services/translation/translation.service';
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
export class Home {
  private readonly seo = inject(SeoService);
  private readonly translation = inject(TranslationService);

  constructor() {
    effect(() => {
      this.seo.updateSeo({
        title: this.translation.t('seo.home.title'),
        description: this.translation.t('seo.home.description'),
        image: '/assets/images/seo/home.png',
        url: 'https://www.ressutti.com',
      });
    });
  }
}
