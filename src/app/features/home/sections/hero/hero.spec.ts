import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { vi } from 'vitest';

import { Hero } from './hero';
import { LOCALES } from '../../../../shared/i18n/locales';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    document.documentElement.lang = LOCALES.enGB;
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: true })),
    );

    await TestBed.configureTestingModule({
      imports: [Hero],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one accessible page heading without exposing the animated copy twice', () => {
    const element = fixture.nativeElement as HTMLElement;
    const heading = element.querySelector('h1');

    expect(element.querySelectorAll('h1')).toHaveLength(1);
    expect(heading?.querySelector('.sr-only')?.textContent).toContain(
      'Building modern, scalable and robust digital solutions.',
    );
    expect(heading?.querySelector('[aria-hidden="true"]')).not.toBeNull();
  });

  it('should render locale-aware project and contact calls to action', () => {
    const links = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLAnchorElement>('a'),
    );

    expect(links.map((link) => link.getAttribute('href'))).toEqual(['/projects', '/contact']);
    expect(links.every((link) => link.hreflang === LOCALES.enGB)).toBe(true);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });
});
