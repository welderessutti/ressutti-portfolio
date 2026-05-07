import { Component } from '@angular/core';
import { RevealOnScroll } from '../../../../shared/directives/reveal-on-scroll';
import { AboutDefinition } from './about.definition.model';

@Component({
  selector: 'app-about',
  imports: [RevealOnScroll],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly highlights: string[] = [
    $localize`:@@home.about.main.highlights.0:Focus on performance and scalability`,
    $localize`:@@home.about.main.highlights.1:Clean code and best practices`,
    $localize`:@@home.about.main.highlights.2:Experience with web applications`,
  ];
  protected readonly definitions: AboutDefinition[] = [
    {
      id: '1',
      term: $localize`:@@home.about.card.definitions.term1:Main stack`,
      description: $localize`:@@home.about.card.definitions.description1:Angular, Java`,
    },
    {
      id: '2',
      term: $localize`:@@home.about.card.definitions.term2:Focus`,
      description: $localize`:@@home.about.card.definitions.description2:Modern frontend`,
    },
    {
      id: '3',
      term: $localize`:@@home.about.card.definitions.term3:Experience`,
      description: $localize`:@@home.about.card.definitions.description3:Personal projects and continuous learning`,
    },
    {
      id: '4',
      term: $localize`:@@home.about.card.definitions.term4:Location`,
      description: $localize`:@@home.about.card.definitions.description4:Indaiatuba, SP - Brazil`,
    },
  ];
}
