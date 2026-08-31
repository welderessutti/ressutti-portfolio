import { Component, inject, DOCUMENT } from '@angular/core';
import { SeoService } from '../../core/services/seo/seo.service';
import { Hero } from './sections/hero/hero';
import { Projects } from './sections/projects/projects';
import { Stacks } from './sections/stacks/stacks';
import { About } from './sections/about/about';
import { ROUTES } from '../../shared/i18n/routes';
import { Locale } from '../../shared/i18n/locales';

@Component({
  selector: 'app-home',
  imports: [Hero, Projects, Stacks, About],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly document = inject(DOCUMENT);
  private readonly seo = inject(SeoService);

  private get currentLocale(): Locale {
    return this.document.documentElement.lang as Locale;
  }

  constructor() {
    this.seo.updateSeo({
      indexable: true,
      title: $localize`:@@home.seo.title:Welder Ressutti | Full-Stack Software Developer | Portfolio`,
      description: $localize`:@@home.seo.description:Portfolio of Welder Ressutti, a full-stack software developer specialising in Angular, Java and Spring, with a focus on architecture, performance and user experience.`,
      currentLocale: this.currentLocale,
      path: ROUTES.home,
      image: 'images/seo/pages/wr-logo-frame-gradient-seo-image.webp',
      imageAlt: $localize`:@@home.seo.imageAlt:WR logo for Welder Ressutti — ressutti.com`,
      openGraphType: 'website',
      jsonLdType: 'WebPage',
    });
  }
}
