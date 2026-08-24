import { DOCUMENT } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

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
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => meta.remove());
    localStorage.removeItem('theme');
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
});
