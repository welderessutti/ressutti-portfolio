import { Component, inject, computed } from '@angular/core';
import { RevealOnScroll } from '../../../../shared/directives/reveal-on-scroll';
import { TranslationService } from '../../../../core/services/translation.service';
import { AboutDefinitionItem } from './about.definition.item';

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
  protected readonly definitions = computed<AboutDefinitionItem[]>(() =>
    this.translation.tObjectArray<AboutDefinitionItem>('about.card.definitions'),
  );
}
