import { Component, OnDestroy, signal, computed, inject, effect } from '@angular/core';
import { TranslationService } from '../../../../core/services/translation.service';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnDestroy {
  protected readonly translation = inject(TranslationService);
  protected readonly words = computed(() => this.translation.tArray('hero.words'));
  protected readonly typedText = signal('');

  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private timeoutId?: ReturnType<typeof setTimeout>;

  constructor() {
    effect(() => {
      const words = this.words();

      if (!words.length) return;

      this.wordIndex = 0;
      this.charIndex = 0;
      this.isDeleting = false;

      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }

      this.typeEffect();
    });
  }

  public ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private typeEffect() {
    const words = this.words();

    if (!words.length) return;

    const currentWord = words[this.wordIndex];

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
      this.wordIndex = (this.wordIndex + 1) % words.length; // loop back to first word
      speed = 300;
    }

    this.timeoutId = setTimeout(() => this.typeEffect(), speed);
  }
}
