import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  imports: [],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.css',
})
export class MobileMenu {
  @Input() isOpen!: boolean;
  @Output() protected readonly closeMenu = new EventEmitter<void>();

  protected onClose() {
    this.closeMenu.emit();
  }
}
