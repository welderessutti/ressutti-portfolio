import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Nav } from '../../../shared/models/nav.model';
import { Contact } from '../../../shared/models/contact.model';
import { Svg } from '../../../shared/icons/svg/svg';

@Component({
  selector: 'app-mobile-menu',
  imports: [RouterLink, RouterLinkActive, Svg],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.css',
})
export class MobileMenu {
  public readonly navs = input<Nav[]>([]);
  public readonly contacts = input<Contact[]>([]);
  public readonly cvPath = input<string>();
  public readonly isOpen = input<boolean>(false);
  public readonly closeMenu = output<void>();

  protected onClose() {
    this.closeMenu.emit();
  }
}
