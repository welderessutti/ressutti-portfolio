import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  imports: [],
  templateUrl: './mobile-menu.html',
  styleUrl: './mobile-menu.css',
})
export class MobileMenu {
  @Input() isOpen!: boolean;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
