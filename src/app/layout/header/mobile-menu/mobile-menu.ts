import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Nav } from '../../../shared/models/nav.model';

@Component({
  selector: 'app-mobile-menu',
  imports: [RouterLink],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.css',
})
export class MobileMenu {
  @Input() navs: Nav[] = [];
  @Input() isOpen: boolean = false;
  @Output() protected readonly closeMenu = new EventEmitter<void>();

  protected onClose() {
    this.closeMenu.emit();
  }
}
