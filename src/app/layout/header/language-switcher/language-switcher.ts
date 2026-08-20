import {
  Component,
  signal,
  computed,
  ElementRef,
  HostListener,
  inject,
  DOCUMENT,
  OnInit,
  viewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT_LOCALE, Locale, LOCALES } from '../../../shared/i18n/locales';
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
  private readonly currentUrl = computed(() => {
    const finalUrl = this.router.lastSuccessfulNavigation()?.finalUrl;

    return finalUrl ? this.router.serializeUrl(finalUrl) : this.router.url;
  });
  protected readonly LOCALES = LOCALES;
  protected readonly currentLang = signal<Locale>(DEFAULT_LOCALE);
  protected readonly isOpen = signal(false);
  protected readonly ptBRSwitchLangUrl = computed(() => this.buildSwitchLangUrl(LOCALES.ptBR));
  protected readonly enGBSwitchLangUrl = computed(() => this.buildSwitchLangUrl(LOCALES.enGB));
  protected readonly currentFlag = computed(() => `icons/flags/${this.currentLang()}.svg`);
  private readonly languageButton = viewChild<ElementRef<HTMLButtonElement>>('languageButton');

  public ngOnInit() {
    const lang = this.document.documentElement.lang as Locale;
    this.currentLang.set(lang);
  }

  protected toggle() {
    this.isOpen.update((value) => !value);
  }

  private buildSwitchLangUrl(targetLocale: Locale): string {
    const urlTree = this.router.parseUrl(this.currentUrl());
    const primarySegments = urlTree.root.children['primary']?.segments ?? [];

    const localeSegment = primarySegments[0]?.path.toLowerCase();
    const hasLocalePrefix = Object.values(LOCALES)
      .map((locale) => locale.toLowerCase())
      .includes(localeSegment);

    const routeSegments = hasLocalePrefix ? primarySegments.slice(1) : primarySegments;
    const firstRouteSegment = routeSegments[0];
    const remainingSegments = routeSegments.slice(1);

    const currentLocale = this.currentLang();

    const routeKey = firstRouteSegment
      ? (Object.keys(ROUTES) as RouteKey[]).find(
          (key) => ROUTES[key][currentLocale] === firstRouteSegment.path,
        )
      : 'home';

    if (!routeKey) {
      return `/${targetLocale.toLowerCase()}`;
    }

    const translatedSlug = ROUTES[routeKey][targetLocale];

    const commands: Array<string | Record<string, string>> = ['/', targetLocale.toLowerCase()];

    if (translatedSlug) {
      commands.push(translatedSlug);

      if (Object.keys(firstRouteSegment.parameters).length > 0) {
        commands.push(firstRouteSegment.parameters);
      }
    }

    for (const segment of remainingSegments) {
      commands.push(segment.path);

      if (Object.keys(segment.parameters).length > 0) {
        commands.push(segment.parameters);
      }
    }

    return this.router.serializeUrl(
      this.router.createUrlTree(commands, {
        queryParams: urlTree.queryParams,
        fragment: urlTree.fragment ?? undefined,
      }),
    );
  }

  protected savePreferredLanguage(locale: Locale) {
    this.document.cookie = `preferred-language=${locale};path=/;max-age=31536000;SameSite=Lax`;
  }

  protected onFocusOut(event: FocusEvent) {
    const container = event.currentTarget as HTMLElement;
    const nextTarget = event.relatedTarget as Node | null;

    if (!nextTarget || !container.contains(nextTarget)) {
      this.isOpen.set(false);
    }
  }

  @HostListener('document:click', ['$event'])
  protected onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('#lang-switcher')) {
      this.isOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  protected onEscape() {
    if (!this.isOpen()) return;

    this.isOpen.set(false);
    this.languageButton()?.nativeElement.focus();
  }
}
