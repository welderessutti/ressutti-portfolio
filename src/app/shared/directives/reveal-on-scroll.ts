import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, inject, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
})
export class RevealOnScroll implements AfterViewInit {
  private readonly document = inject(DOCUMENT);
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  private get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  public ngAfterViewInit() {
    if (!this.isBrowser) return;

    const view = this.document.defaultView;
    const prefersReducedMotion =
      view?.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    if (!view || prefersReducedMotion || typeof view.IntersectionObserver !== 'function') {
      this.el.nativeElement.classList.add('show');
      return;
    }

    const observer = new view.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('show');
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(this.el.nativeElement);
  }
}
