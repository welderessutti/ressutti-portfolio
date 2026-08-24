import { Component, PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { RevealOnScroll } from './reveal-on-scroll';

@Component({
  imports: [RevealOnScroll],
  template: '<div class="reveal" appRevealOnScroll></div>',
})
class TestHost {}

class IntersectionObserverMock implements IntersectionObserver {
  public static instance: IntersectionObserverMock | undefined;
  public readonly root = null;
  public readonly rootMargin = '0px';
  public readonly thresholds = [0.1];
  public readonly observe = vi.fn();
  public readonly disconnect = vi.fn();
  public readonly unobserve = vi.fn();
  private readonly callback: IntersectionObserverCallback;

  public constructor(callback: IntersectionObserverCallback) {
    this.callback = callback;
    IntersectionObserverMock.instance = this;
  }

  public takeRecords(): IntersectionObserverEntry[] {
    return [];
  }

  public trigger(isIntersecting: boolean): void {
    this.callback([{ isIntersecting } as IntersectionObserverEntry], this);
  }
}

describe('RevealOnScroll', () => {
  async function createHost(platformId: 'browser' | 'server' = 'browser'): Promise<HTMLDivElement> {
    await TestBed.configureTestingModule({
      imports: [TestHost],
      providers: [{ provide: PLATFORM_ID, useValue: platformId }],
    }).compileComponents();

    const fixture = TestBed.createComponent(TestHost);
    await fixture.whenStable();

    return fixture.nativeElement.querySelector('div') as HTMLDivElement;
  }

  afterEach(() => {
    vi.unstubAllGlobals();
    IntersectionObserverMock.instance = undefined;
  });

  it('should reveal content when IntersectionObserver is unavailable', async () => {
    vi.stubGlobal('IntersectionObserver', undefined);

    const element = await createHost();

    expect(element.classList.contains('show')).toBe(true);
  });

  it('should reveal content immediately when reduced motion is preferred', async () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: true })),
    );
    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

    const element = await createHost();

    expect(element.classList.contains('show')).toBe(true);
    expect(IntersectionObserverMock.instance).toBeUndefined();
  });

  it('should observe content and reveal it only after intersection', async () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: false })),
    );
    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

    const element = await createHost();
    const observer = IntersectionObserverMock.instance;

    expect(observer?.observe).toHaveBeenCalledWith(element);
    expect(element.classList.contains('show')).toBe(false);

    observer?.trigger(false);
    expect(element.classList.contains('show')).toBe(false);

    observer?.trigger(true);
    expect(element.classList.contains('show')).toBe(true);
    expect(observer?.disconnect).toHaveBeenCalledOnce();
  });

  it('should avoid browser APIs during server rendering', async () => {
    const matchMedia = vi.fn();
    vi.stubGlobal('matchMedia', matchMedia);
    vi.stubGlobal('IntersectionObserver', IntersectionObserverMock);

    const element = await createHost('server');

    expect(element.classList.contains('show')).toBe(false);
    expect(matchMedia).not.toHaveBeenCalled();
    expect(IntersectionObserverMock.instance).toBeUndefined();
  });
});
