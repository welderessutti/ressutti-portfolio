import { Component, OnInit, OnDestroy, signal, inject, DOCUMENT } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Locale } from '../../../../shared/i18n/locales';
import { ROUTES } from '../../../../shared/i18n/routes';

@Component({
  selector: 'app-hero',
  imports: [RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit, OnDestroy {
  private readonly document = inject(DOCUMENT);
  private readonly words = [
    $localize`:@@home.hero.keyword.modern:modern`,
    $localize`:@@home.hero.keyword.scalable:scalable`,
    $localize`:@@home.hero.keyword.highPerformance:high-performance`,
  ];
  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId?: ReturnType<typeof setTimeout>;
  protected readonly currentLocale = this.currentLocaleHtml;
  protected readonly viewProjectsButtonPath = ROUTES.projects[this.currentLocale];
  protected readonly contactButtonPath = ROUTES.contact[this.currentLocale];
  protected readonly typedText = signal('');

  public ngOnInit() {
    this.typeEffect();
  }

  public ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private get currentLocaleHtml(): Locale {
    return this.document.documentElement.lang as Locale;
  }

  private typeEffect() {
    if (!this.words.length) return;

    const currentWord = this.words[this.wordIndex];

    if (this.isDeleting) {
      this.charIndex--;
    } else {
      this.charIndex++;
    }

    this.typedText.set(currentWord.slice(0, this.charIndex));

    let speed = this.isDeleting ? 50 : 100;

    // stopped typing
    if (!this.isDeleting && this.charIndex === currentWord.length) {
      speed = 1200; // pausa
      this.isDeleting = true;
    }
    // stopped deleting
    else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length; // loop back to first word
      speed = 300;
    }

    this.timeoutId = setTimeout(() => this.typeEffect(), speed);
  }
}
