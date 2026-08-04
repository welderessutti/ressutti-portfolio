import { Component, inject } from '@angular/core';
import { SeoService } from '../../core/services/seo/seo.service';
import { ROUTES } from '../../shared/i18n/routes';
import { ContactService } from '../../core/services/contact/contact.service';
import { Svg } from '../../shared/icons/svg/svg';
import { RevealOnScroll } from '../../shared/directives/reveal-on-scroll';

@Component({
  selector: 'app-contact',
  imports: [Svg, RevealOnScroll],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  private readonly seo = inject(SeoService);
  private readonly contact = inject(ContactService);
  protected readonly contacts = this.contact.contacts;
  protected readonly cvPath = this.contact.cvPath;

  public constructor() {
    this.seo.updateSeo({
      title: $localize`:@@contact.seo.title:Contact Welder Ressutti | Ressutti.dev`,
      description: $localize`:@@contact.seo.description:Contact Welder Ressutti about software development opportunities, projects, collaboration or professional networking.`,
      image: '/favicon.ico',
      imageAlt: $localize`:@@contact.seo.imageAlt:Ressutti.dev portfolio logo.`,
      path: ROUTES.contact,
      openGraphType: 'website',
      jsonLdType: 'ContactPage',
    });
  }
}
