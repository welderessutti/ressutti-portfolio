import { DOCUMENT } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let document: Document;

  async function createHeader(): Promise<void> {
    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();

    document = TestBed.inject(DOCUMENT);
    document.documentElement.classList.remove('dark');
    localStorage.removeItem('theme');

    const themeColorMeta = document.createElement('meta');
    themeColorMeta.name = 'theme-color';
    themeColorMeta.content = '#fcfcfe';
    themeColorMeta.setAttribute('data-theme-color-light', '#fcfcfe');
    themeColorMeta.setAttribute('data-theme-color-dark', '#0b0f19');
    document.head.appendChild(themeColorMeta);
  });

  afterEach(() => {
    document.documentElement.classList.remove('dark');
    document.body.classList.remove('overflow-hidden');
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => meta.remove());
    localStorage.removeItem('theme');
    vi.restoreAllMocks();
  });

  it('should create', async () => {
    await createHeader();

    expect(component).toBeTruthy();
  });

  it('should expose the state of the theme and mobile-menu controls', async () => {
    await createHeader();

    const element = fixture.nativeElement as HTMLElement;
    const themeButton = element.querySelector<HTMLButtonElement>('button[aria-pressed]');
    const menuButton = element.querySelector<HTMLButtonElement>(
      'button[aria-controls="mobile-menu"]',
    );

    expect(themeButton?.getAttribute('aria-pressed')).toMatch(/^(true|false)$/);
    expect(menuButton?.getAttribute('aria-expanded')).toBe('false');
  });

  it('should preserve and synchronize a dark theme selected before Angular starts', async () => {
    document.documentElement.classList.add('dark');

    await createHeader();

    const element = fixture.nativeElement as HTMLElement;
    const themeButton = element.querySelector<HTMLButtonElement>('button[aria-pressed]');

    expect(themeButton?.getAttribute('aria-pressed')).toBe('true');
    expect(document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.content).toBe(
      '#0b0f19',
    );
    expect(document.querySelectorAll('meta[name="theme-color"]')).toHaveLength(1);
  });

  it('should synchronize the class, metadata and preference on each theme toggle', async () => {
    await createHeader();

    const element = fixture.nativeElement as HTMLElement;
    const themeButton = element.querySelector<HTMLButtonElement>('button[aria-pressed]');

    themeButton?.click();
    fixture.detectChanges();

    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(themeButton?.getAttribute('aria-pressed')).toBe('true');
    expect(localStorage.getItem('theme')).toBe('dark');
    expect(document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.content).toBe(
      '#0b0f19',
    );
    expect(document.querySelectorAll('meta[name="theme-color"]')).toHaveLength(1);

    themeButton?.click();
    fixture.detectChanges();

    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(themeButton?.getAttribute('aria-pressed')).toBe('false');
    expect(localStorage.getItem('theme')).toBe('light');
    expect(document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.content).toBe(
      '#fcfcfe',
    );
    expect(document.querySelectorAll('meta[name="theme-color"]')).toHaveLength(1);
  });

  it('should lock page scrolling while the mobile menu is open', async () => {
    await createHeader();
    const element = fixture.nativeElement as HTMLElement;
    const menuButton = element.querySelector<HTMLButtonElement>(
      'button[aria-controls="mobile-menu"]',
    );
    const drawer = element.querySelector<HTMLElement>('#mobile-menu');

    menuButton?.click();
    fixture.detectChanges();

    expect(menuButton?.getAttribute('aria-expanded')).toBe('true');
    expect(drawer?.getAttribute('aria-hidden')).toBe('false');
    expect(document.body.classList.contains('overflow-hidden')).toBe(true);

    menuButton?.click();
    fixture.detectChanges();

    expect(menuButton?.getAttribute('aria-expanded')).toBe('false');
    expect(document.body.classList.contains('overflow-hidden')).toBe(false);
  });

  it('should close the mobile menu with Escape and restore focus to its trigger', async () => {
    const animationFrame = vi
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((callback) => {
        callback(0);
        return 1;
      });
    await createHeader();
    const menuButton = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>(
      'button[aria-controls="mobile-menu"]',
    );

    menuButton?.click();
    fixture.detectChanges();
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    fixture.detectChanges();

    expect(animationFrame).toHaveBeenCalled();
    expect(menuButton?.getAttribute('aria-expanded')).toBe('false');
    expect(document.body.classList.contains('overflow-hidden')).toBe(false);
    expect(document.activeElement).toBe(menuButton);
  });

  it('should close the mobile menu when the viewport reaches the desktop breakpoint', async () => {
    vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(768);
    await createHeader();
    const menuButton = (fixture.nativeElement as HTMLElement).querySelector<HTMLButtonElement>(
      'button[aria-controls="mobile-menu"]',
    );

    menuButton?.click();
    fixture.detectChanges();
    window.dispatchEvent(new Event('resize'));
    fixture.detectChanges();

    expect(menuButton?.getAttribute('aria-expanded')).toBe('false');
    expect(document.body.classList.contains('overflow-hidden')).toBe(false);
  });
});
