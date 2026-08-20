import { isPlatformBrowser } from '@angular/common';
import { Component, DestroyRef, DOCUMENT, inject, PLATFORM_ID } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private hasCompletedInitialNavigation = this.router.navigated;

  public constructor() {
    if (!isPlatformBrowser(this.platformId)) return;

    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        if (!this.hasCompletedInitialNavigation) {
          this.hasCompletedInitialNavigation = true;
          return;
        }

        this.document.defaultView?.requestAnimationFrame(() => {
          this.document.getElementById('main-content')?.focus({ preventScroll: true });
        });
      });
  }
}
