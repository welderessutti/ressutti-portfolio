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
    $localize`:@@home.about.main.highlights.0:End-to-end development across front-end and back-end`,
    $localize`:@@home.about.main.highlights.1:Architecture designed for maintainability and growth`,
    $localize`:@@home.about.main.highlights.2:Quality built into implementation and delivery`,
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
