import {
  Component,
  signal,
  HostListener,
  inject,
  PLATFORM_ID,
  DOCUMENT,
  ElementRef,
  OnInit,
  viewChild,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { MobileMenu, MobileMenuCloseReason } from './mobile-menu/mobile-menu';
import { LanguageSwitcher } from './language-switcher/language-switcher';
import { NavService } from '../../core/services/nav/nav.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ContactService } from '../../core/services/contact/contact.service';
import { SeoService } from '../../core/services/seo/seo.service';

@Component({
  selector: 'app-header',
  imports: [MobileMenu, LanguageSwitcher, RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly document = inject(DOCUMENT);
  private readonly nav = inject(NavService);
  private readonly contact = inject(ContactService);
  private readonly seo = inject(SeoService);
  protected readonly navs = this.nav.navs;
  protected readonly contacts = this.contact.contacts;
  protected readonly cvPath = this.contact.cvPath;
  protected readonly isMenuOpen = signal(false);
  protected readonly isDarkMode = signal(false);
  private readonly mobileMenuButton = viewChild<ElementRef<HTMLButtonElement>>('mobileMenuButton');

  private get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  public ngOnInit() {
    if (this.isBrowser) {
      const isDark = this.document.documentElement.classList.contains('dark');
      this.isDarkMode.set(isDark);
      this.seo.updateThemeColor(isDark);
    }
  }

  protected toggleTheme() {
    if (!this.isBrowser) return;
    const isDark = this.document.documentElement.classList.toggle('dark');
    this.document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
    this.isDarkMode.set(isDark);
    this.seo.updateThemeColor(isDark);
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

  protected handleMobileMenuClose(reason: MobileMenuCloseReason) {
    this.isMenuOpen.set(false);
    this.toggleBodyScroll(false);

    if (reason === 'dismiss' || reason === 'action') {
      this.document.defaultView?.requestAnimationFrame(() => {
        this.mobileMenuButton()?.nativeElement.focus();
      });
    }
  }

  @HostListener('window:resize')
  protected onResize() {
    if (!this.isBrowser) return;
    if (!this.isMenuOpen()) return;
    if (window.innerWidth >= 768) {
      this.handleMobileMenuClose('viewport-change');
    }
  }

  @HostListener('window:keydown.escape')
  protected onEsc() {
    if (!this.isBrowser) return;
    if (this.isMenuOpen()) {
      this.handleMobileMenuClose('dismiss');
    }
  }
}
