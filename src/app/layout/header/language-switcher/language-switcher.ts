import { Component, signal, HostListener, inject, DOCUMENT, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type Lang = 'en-GB' | 'pt-BR';

@Component({
  selector: 'app-language-switcher',
  imports: [],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css',
})
export class LanguageSwitcher implements OnInit {
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  protected readonly currentLang = signal<Lang>('en-GB');
  protected readonly isOpen = signal(false);

  public ngOnInit() {
    const lang = this.document.documentElement.lang as Lang;
    this.currentLang.set(lang);
  }

  protected toggle() {
    this.isOpen.update((value) => !value);
  }

  protected switchLang(lang: Lang) {
    const currentUrl = this.router.url;
    const newUrl =
      lang === 'pt-BR'
        ? currentUrl.replace(/^\/en-GB/, '/pt-BR')
        : currentUrl.replace(/^\/pt-BR/, '/en-GB');

    window.location.href = newUrl;
  }

  @HostListener('document:click', ['$event'])
  protected onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('#lang-switcher')) {
      this.isOpen.set(false);
    }
  }
}
