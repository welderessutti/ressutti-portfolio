import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { vi } from 'vitest';
import { App } from './app';

@Component({
  template: '',
})
class RouteStub {}

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideRouter([
          { path: 'first', component: RouteStub },
          { path: 'second', component: RouteStub },
        ]),
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the skip link and its focusable main target', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    const skipLink = compiled.querySelector<HTMLAnchorElement>('.skip-link');
    const main = compiled.querySelector<HTMLElement>('#main-content');

    expect(skipLink?.getAttribute('href')).toBe('#main-content');
    expect(main?.getAttribute('tabindex')).toBe('-1');
  });

  it('should move focus to main content after client-side route changes', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const router = TestBed.inject(Router);
    const main = (fixture.nativeElement as HTMLElement).querySelector<HTMLElement>('#main-content');
    const focus = vi.spyOn(main!, 'focus');
    const animationFrame = vi
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((callback) => {
        callback(0);
        return 1;
      });

    await router.navigateByUrl('/first');

    expect(focus).not.toHaveBeenCalled();

    const animationFramesBeforeRouteChange = animationFrame.mock.calls.length;
    await router.navigateByUrl('/second');

    expect(animationFrame.mock.calls.length).toBeGreaterThan(animationFramesBeforeRouteChange);
    expect(focus).toHaveBeenCalledWith({ preventScroll: true });
  });
});
