import {
  Component,
  signal,
  HostListener,
  inject,
  PLATFORM_ID,
  DOCUMENT,
  OnInit,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MobileMenu } from './mobile-menu/mobile-menu';
import { LanguageSwitcher } from './language-switcher/language-switcher';
import { NavService } from '../../core/services/nav/nav.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MobileMenu, LanguageSwitcher, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  protected readonly nav = inject(NavService);
  protected readonly isMenuOpen = signal(false);
  protected readonly isDarkMode = signal(false);

  private get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  public ngOnInit() {
    if (this.isBrowser) {
      const isDark = this.document.documentElement.classList.contains('dark');
      this.isDarkMode.set(isDark);
    }
  }

  protected toggleTheme() {
    if (!this.isBrowser) return;
    const isDark = this.document.documentElement.classList.toggle('dark');
    this.isDarkMode.set(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  private toggleBodyScroll(lock: boolean) {
    if (!this.isBrowser) return;
    this.document.body.classList.toggle('overflow-hidden', lock);
  }

  protected toggleMenu() {
    this.isMenuOpen.update((value) => {
      const newValue = !value;
      this.toggleBodyScroll(newValue);
      return newValue;
    });
  }

  protected closeMenu() {
    this.isMenuOpen.set(false);
    this.toggleBodyScroll(false);
  }

  @HostListener('window:resize')
  protected onResize() {
    if (!this.isBrowser) return;
    if (!this.isMenuOpen()) return;
    if (window.innerWidth >= 768) {
      this.closeMenu();
    }
  }

  @HostListener('window:keydown.escape')
  protected onEsc() {
    if (!this.isBrowser) return;
    if (this.isMenuOpen()) {
      this.closeMenu();
    }
  }
}
