import { Directive, ElementRef, AfterViewInit, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appRevealOnScroll]',
})
export class RevealOnScroll implements AfterViewInit {
  private readonly el = inject(ElementRef);
  private readonly platformId = inject(PLATFORM_ID);

  private get isBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  public ngAfterViewInit() {
    if (!this.isBrowser) return;

    const observer = new IntersectionObserver(
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
