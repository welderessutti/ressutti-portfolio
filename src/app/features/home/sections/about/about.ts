import { Component } from '@angular/core';
import { RevealOnScroll } from '../../../../shared/directives/reveal-on-scroll';
import { AboutDefinition } from '../../../../shared/models/about.definition.model';

@Component({
  selector: 'app-about',
  imports: [RevealOnScroll],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly highlights: string[] = [
    $localize`:@@home.about.main.highlights.0:Analytical and solution-oriented mindset`,
    $localize`:@@home.about.main.highlights.1:Quality throughout the development process`,
    $localize`:@@home.about.main.highlights.2:Experience building end-to-end web applications`,
  ];
  protected readonly definitions: AboutDefinition[] = [
    {
      id: '1',
      term: $localize`:@@home.about.card.definitions.term1:Main stack`,
      description: $localize`:@@home.about.card.definitions.description1:Angular · Spring`,
    },
    {
      id: '2',
      term: $localize`:@@home.about.card.definitions.term2:Expertise`,
      description: $localize`:@@home.about.card.definitions.description2:Full-stack web development`,
    },
    {
      id: '3',
      term: $localize`:@@home.about.card.definitions.term3:Experience`,
      description: $localize`:@@home.about.card.definitions.description3:Freelance work · Independent projects`,
    },
    {
      id: '4',
      term: $localize`:@@home.about.card.definitions.term4:Location`,
      description: $localize`:@@home.about.card.definitions.description4:São Paulo · Indaiatuba · Worldwide`,
    },
  ];
}
