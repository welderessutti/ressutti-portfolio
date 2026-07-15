import { Component, signal, HostListener, inject, DOCUMENT, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT_LOCALE, Locale, LOCALES, SUPPORTED_LOCALES } from '../../../shared/i18n/locales';
import { ROUTES, RouteKey } from '../../../shared/i18n/routes';

@Component({
  selector: 'app-language-switcher',
  imports: [],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css',
})
export class LanguageSwitcher implements OnInit {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  protected readonly LOCALES = LOCALES;
  protected readonly currentLang = signal<Locale>(DEFAULT_LOCALE);
  protected readonly isOpen = signal(false);

  public ngOnInit() {
    const lang = this.document.documentElement.lang as Locale;
    this.currentLang.set(lang);
  }

  protected toggle() {
    this.isOpen.update((value) => !value);
  }

  protected getSwitchLangUrl(targetLocale: Locale): string {
    const pathname = this.router.url.split('?')[0].split('#')[0];
    const segments = pathname.split('/').filter(Boolean);

    const currentLocale = this.currentLang(); // fonte de verdade real

    const currentSlug = segments[0] ?? ''; // slug é o primeiro segmento (sem locale no path)

    const routeKey = (Object.keys(ROUTES) as RouteKey[]).find(
      (key) => ROUTES[key][currentLocale] === currentSlug,
    );

    const translatedSlug = routeKey ? ROUTES[routeKey][targetLocale] : null;
    const base = `/${targetLocale.toLowerCase()}`;

    console.log('Current Locale:', currentLocale);
    console.log('executou!');

    return translatedSlug !== null && translatedSlug !== undefined
      ? translatedSlug === ''
        ? base
        : `${base}/${translatedSlug}`
      : base;
  }

  protected savePreferredLanguage(locale: Locale) {
    this.document.cookie = `preferred-language=${locale};path=/;max-age=31536000;SameSite=Lax`;
  }

  @HostListener('document:click', ['$event'])
  protected onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('#lang-switcher')) {
      this.isOpen.set(false);
    }
  }
}
