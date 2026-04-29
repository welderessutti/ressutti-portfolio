import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

type Lang = 'en-GB' | 'pt-BR';
type Translations = Record<string, any>;

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly lang = signal<Lang>('en-GB');
  private readonly translations = signal<Translations>({});
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

  private async loadTranslations(lang: Lang) {
    try {
      const file = await fetch(`/i18n/${lang}.json`);
      const json = await file.json();
      this.translations.set(json);
    } catch {
      this.translations.set({});
    }
  }

  public init() {
    const htmlLang = this.getLangFromHtml();
    this.lang.set(htmlLang);
    this.loadTranslations(htmlLang);
  }

  public setLang(lang: Lang) {
    this.lang.set(lang);
    this.setHtmlLang(lang);
    this.persistLang(lang);
    this.loadTranslations(lang);
  }

  public t(path: string): string {
    const keys = path.split('.');
    let value: unknown = this.translations();

    for (const key of keys) {
      if (typeof value !== 'object' || value === null) return path;
      value = (value as Record<string, unknown>)[key];
    }
    return typeof value === 'string' ? value : path;
  }

  public tArray(path: string): string[] {
    const keys = path.split('.');
    let value: unknown = this.translations();

    for (const key of keys) {
      if (typeof value !== 'object' || value === null) return [];
      value = (value as Record<string, unknown>)[key];
    }
    return Array.isArray(value) ? value : [];
  }
}
