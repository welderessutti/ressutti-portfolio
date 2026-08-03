import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavService } from '../../core/services/nav/nav.service';
import { ContactService } from '../../core/services/contact/contact.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private readonly nav = inject(NavService);
  private readonly contact = inject(ContactService);
  protected readonly navs = this.nav.navs;
  protected readonly contacts = this.contact.contacts;
  protected readonly currentYear = new Date().getFullYear();
}
