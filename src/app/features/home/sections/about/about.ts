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
    $localize`:@@home.about.highlights.fullStackDelivery:End-to-end development across front-end and back-end`,
    $localize`:@@home.about.highlights.maintainableArchitecture:Architecture designed for maintainability and growth`,
    $localize`:@@home.about.highlights.deliveryQuality:Quality built into implementation and delivery`,
  ];
  protected readonly definitions: AboutDefinition[] = [
    {
      id: '1',
      term: $localize`:@@home.about.summary.mainStack.term:Main stack`,
      description: 'Angular · Spring',
    },
    {
      id: '2',
      term: $localize`:@@home.about.summary.expertise.term:Expertise`,
      description: $localize`:@@home.about.summary.expertise.description:Full-stack web development`,
    },
    {
      id: '3',
      term: $localize`:@@home.about.summary.experience.term:Experience`,
      description: $localize`:@@home.about.summary.experience.description:Freelance work · Independent projects`,
    },
    {
      id: '4',
      term: $localize`:@@home.about.summary.location.term:Location`,
      description: $localize`:@@home.about.summary.location.description:São Paulo · Indaiatuba · Worldwide`,
    },
  ];
}
