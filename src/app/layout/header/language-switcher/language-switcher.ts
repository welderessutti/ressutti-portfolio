import { Component, signal, HostListener, inject, DOCUMENT, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DEFAULT_LOCALE, Locale, LOCALES } from '../../../shared/i18n/locales';

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

  protected getSwitchLangUrl(locale: Locale): string {
    return this.router.url.replace(new RegExp(`^/(${LOCALES.enGB}|${LOCALES.ptBR})`), `/${locale}`);
  }

  @HostListener('document:click', ['$event'])
  protected onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('#lang-switcher')) {
      this.isOpen.set(false);
    }
  }
}
