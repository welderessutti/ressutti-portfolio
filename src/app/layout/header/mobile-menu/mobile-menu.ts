import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Nav } from '../../../shared/models/nav.model';
import { Contact } from '../../../shared/models/contact.model';
import { Svg } from '../../../shared/icons/svg/svg';

export type MobileMenuCloseReason =
  | 'dismiss'
  | 'navigation'
  | 'action'
  | 'focus-leave'
  | 'viewport-change';

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
  public readonly closeRequested = output<MobileMenuCloseReason>();

  protected requestClose(reason: MobileMenuCloseReason) {
    this.closeRequested.emit(reason);
  }

  protected onFocusOut(event: FocusEvent) {
    const drawer = event.currentTarget as HTMLElement;
    const nextTarget = event.relatedTarget as Node | null;

    if (!nextTarget || !drawer.contains(nextTarget)) {
      this.requestClose('focus-leave');
    }
  }
}
