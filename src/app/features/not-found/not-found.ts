import { Component, inject, DOCUMENT } from '@angular/core';
import { Locale } from '../../shared/i18n/locales';
import { ROUTES } from '../../shared/i18n/routes';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo/seo.service';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
  private readonly document = inject(DOCUMENT);
  private readonly seo = inject(SeoService);
  protected readonly currentLocale = this.currentLocaleHtml;
  protected readonly homeButtonPath = `/${ROUTES.home[this.currentLocale]}`;
  protected readonly viewProjectsButtonPath = `/${ROUTES.projects[this.currentLocale]}`;
  protected readonly pageTitle = $localize`:@@notFound.error.heading:Page not found`;
  protected readonly pageDescription = $localize`:@@notFound.error.description:We could not find the page you requested. Check the address or continue using one of the options below.`;

  private get currentLocaleHtml(): Locale {
    return this.document.documentElement.lang as Locale;
  }

  public constructor() {
    this.seo.updateSeo({
      indexable: false,
      title: $localize`:@@notFound.seo.title:Page Not Found | ressutti.com`,
      description: $localize`:@@notFound.seo.description:The requested page could not be found on ressutti.com. Check the address or continue to the home or projects pages.`,
      currentLocale: this.currentLocale,
      image: 'images/seo/pages/wr-logo-frame-gradient-seo-image.webp',
    });
  }
}
