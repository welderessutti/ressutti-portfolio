import { Component, signal, HostListener } from '@angular/core';
import { MobileMenu } from './mobile-menu/mobile-menu';

@Component({
  selector: 'app-header',
  imports: [MobileMenu],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isMenuOpen = signal(false);

  toggleMenu() {
    this.isMenuOpen.update((value) => {
      const newValue = !value;
      this.toggleBodyScroll(newValue);
      return newValue;
    });
  }

  closeMenu() {
    this.isMenuOpen.set(false);
    this.toggleBodyScroll(false);
  }

  private toggleBodyScroll(lock: boolean) {
    document.body.classList.toggle('overflow-hidden', lock);
  }

  @HostListener('window:resize')
  onResize() {
    if (!this.isMenuOpen()) return;

    if (window.innerWidth >= 768) {
      this.closeMenu();
    }
  }

  @HostListener('window:keydown.escape')
  onEsc() {
    if (this.isMenuOpen()) {
      this.closeMenu();
    }
  }
}
