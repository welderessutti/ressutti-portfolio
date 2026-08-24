import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  signal,
  inject,
  DOCUMENT,
  PLATFORM_ID,
} from '@angular/core';
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
  private readonly platformId = inject(PLATFORM_ID);
  private readonly words = [
    $localize`:@@home.hero.title.keyword.modern:modern`,
    $localize`:@@home.hero.title.keyword.scalable:scalable`,
    $localize`:@@home.hero.title.keyword.robust:robust`,
  ];
  private wordIndex = 0;
  private charIndex = this.words[0].length;
  private isDeleting = true;
  private timeoutId?: ReturnType<typeof setTimeout>;
  protected readonly currentLocale = this.currentLocaleHtml;
  protected readonly viewProjectsButtonPath = `/${ROUTES.projects[this.currentLocale]}`;
  protected readonly contactButtonPath = `/${ROUTES.contact[this.currentLocale]}`;
  protected readonly typedText = signal(this.words[0]);

  public ngOnInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    if (
      this.document.defaultView?.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false
    ) {
      return;
    }

    this.timeoutId = setTimeout(() => this.typeEffect(), 1200);
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

    if (!this.isDeleting && this.charIndex === currentWord.length) {
      speed = 1200;
      this.isDeleting = true;
    }
    else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.wordIndex = (this.wordIndex + 1) % this.words.length;
      speed = 300;
    }

    this.timeoutId = setTimeout(() => this.typeEffect(), speed);
  }
}
