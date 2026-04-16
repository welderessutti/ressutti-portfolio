import { Component, signal, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-language-switcher',
  imports: [],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css',
})
export class LanguageSwitcher {
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly isOpen = signal(false);
  protected readonly currentLang = signal<'en-GB' | 'pt-BR'>('en-GB');

  private get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  public ngOnInit() {
    if (this.isBrowser) {
      const langAttr = document.documentElement.lang;
      const lang: 'en-GB' | 'pt-BR' = langAttr === 'pt-BR' ? 'pt-BR' : 'en-GB';
      this.currentLang.set(lang);
    }
  }

  protected toggle() {
    this.isOpen.update((value) => !value);
  }

  private setLang(lang: 'en-GB' | 'pt-BR') {
    if (!this.isBrowser) return;
    document.documentElement.setAttribute('lang', lang);
    this.currentLang.set(lang);
    localStorage.setItem('lang', lang);
  }

  protected selectLang(lang: 'en-GB' | 'pt-BR') {
    this.setLang(lang);
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  protected onClickOutside(event: Event) {
    if (!this.isBrowser) return;
    const target = event.target as HTMLElement;
    if (!target.closest('#lang-switcher')) {
      this.isOpen.set(false);
    }
  }
}
