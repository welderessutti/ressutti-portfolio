import { Component, inject, DOCUMENT } from '@angular/core';
import { Locale } from '../../shared/i18n/locales';
import { ROUTES } from '../../shared/i18n/routes';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [RouterLink],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {
  private readonly document = inject(DOCUMENT);
  protected readonly currentLocale = this.currentLocaleHtml;
  protected readonly homeButtonPath = `/${ROUTES.home[this.currentLocale]}`;
  protected readonly viewProjectsButtonPath = `/${ROUTES.projects[this.currentLocale]}`;

  private get currentLocaleHtml(): Locale {
    return this.document.documentElement.lang as Locale;
  }
}
