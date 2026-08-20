import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should expose the state of the theme and mobile-menu controls', () => {
    const element = fixture.nativeElement as HTMLElement;
    const themeButton = element.querySelector<HTMLButtonElement>('button[aria-pressed]');
    const menuButton = element.querySelector<HTMLButtonElement>('button[aria-controls="mobile-menu"]');

    expect(themeButton?.getAttribute('aria-pressed')).toMatch(/^(true|false)$/);
    expect(menuButton?.getAttribute('aria-expanded')).toBe('false');
  });
});
