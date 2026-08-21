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
      title: $localize`:@@home.seo.title:Welder Ressutti | Full-Stack Angular + Spring Developer`,
      description: $localize`:@@home.seo.description:Portfolio of Welder Ressutti, a Full-Stack Angular + Spring Developer building end-to-end web applications with clear architecture and maintainable code.`,
      currentLocale: this.currentLocale,
      path: ROUTES.home,
      image: 'images/seo/pages/wr-logo-frame-gradient-seo-image.webp',
      imageAlt: $localize`:@@home.seo.imageAlt:WR logo for Welder Ressutti — ressutti.com`,
      openGraphType: 'website',
      jsonLdType: 'WebPage',
    });
  }
}
