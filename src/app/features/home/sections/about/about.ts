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
    $localize`:@@home.about.highlights.fullStackDelivery:System integration across REST APIs, microservices and messaging systems`,
    $localize`:@@home.about.highlights.maintainableArchitecture:Clean architecture, SOLID and design patterns for maintainability and scalability`,
    $localize`:@@home.about.highlights.deliveryQuality:Automated unit, integration and end-to-end testing for reliable delivery`,
  ];
  protected readonly definitions: AboutDefinition[] = [
    {
      id: '1',
      term: $localize`:@@home.about.summary.mainStack.term:Main stack`,
      description: 'Angular · Java · Spring',
    },
    {
      id: '2',
      term: $localize`:@@home.about.summary.expertise.term:Expertise`,
      description: $localize`:@@home.about.summary.expertise.description:Full-stack software development`,
    },
    {
      id: '3',
      term: $localize`:@@home.about.summary.experience.term:Experience`,
      description: $localize`:@@home.about.summary.experience.description:Freelance work · Independent projects`,
    },
    {
      id: '4',
      term: $localize`:@@home.about.summary.location.term:Location`,
      description: $localize`:@@home.about.summary.location.description:São Paulo · Campinas · Indaiatuba · Worldwide`,
    },
  ];
}
