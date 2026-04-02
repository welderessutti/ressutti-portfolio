import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero implements OnInit {
  protected readonly words = ['modernas', 'escaláveis', 'performáticas'];
  protected readonly typedText = signal('');

  private wordIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  ngOnInit() {
    this.typeEffect();
  }

  private typeEffect() {
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

    setTimeout(() => this.typeEffect(), speed);
  }
}
