import { Injectable, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

type Lang = 'en-GB' | 'pt-BR';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly lang = signal<Lang>('en-GB');
  public readonly currentLang = this.lang.asReadonly();

  private get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  private getLangFromHtml(): Lang {
    if (!this.isBrowser) return 'en-GB';
    const langAttr = document.documentElement.lang;
    return langAttr === 'pt-BR' ? 'pt-BR' : 'en-GB';
  }

  private setHtmlLang(lang: Lang) {
    if (!this.isBrowser) return;
    document.documentElement.setAttribute('lang', lang);
  }

  private persistLang(lang: Lang) {
    if (!this.isBrowser) return;
    localStorage.setItem('lang', lang);
  }

  public init() {
    const htmlLang = this.getLangFromHtml();
    this.lang.set(htmlLang);
  }

  public setLang(lang: Lang) {
    this.lang.set(lang);
    this.setHtmlLang(lang);
    this.persistLang(lang);
  }
}
