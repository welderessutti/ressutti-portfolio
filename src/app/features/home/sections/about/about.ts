import { Component, inject, computed } from '@angular/core';
import { RevealOnScroll } from '../../../../shared/directives/reveal-on-scroll';
import { TranslationService } from '../../../../core/services/translation.service';
import { AboutDefinition } from './about.definition.model';

@Component({
  selector: 'app-about',
  imports: [RevealOnScroll],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly translation = inject(TranslationService);
  protected readonly highlights = computed<string[]>(() =>
    this.translation.tObjectArray<string>('about.main.highlights'),
  );
  protected readonly definitions = computed<AboutDefinition[]>(() =>
    this.translation.tObjectArray<AboutDefinition>('about.card.definitions'),
  );
}
