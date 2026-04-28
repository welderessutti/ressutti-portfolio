import { Component, signal, HostListener, inject } from '@angular/core';
import { TranslationService } from '../../../core/services/translation.service';

@Component({
  selector: 'app-language-switcher',
  imports: [],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css',
})
export class LanguageSwitcher {
  protected readonly translation = inject(TranslationService);
  protected readonly currentLang = this.translation.currentLang;
  protected readonly isOpen = signal(false);

  protected toggle() {
    this.isOpen.update((value) => !value);
  }

  protected selectLang(lang: 'en-GB' | 'pt-BR') {
    this.translation.setLang(lang);
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  protected onClickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('#lang-switcher')) {
      this.isOpen.set(false);
    }
  }
}
