import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Footer } from './footer';
import { LOCALES } from '../../shared/i18n/locales';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    document.documentElement.lang = LOCALES.enGB;

    await TestBed.configureTestingModule({
      imports: [Footer],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render locale-aware navigation and safe contact links', () => {
    const element = fixture.nativeElement as HTMLElement;
    const navigationLinks = Array.from(element.querySelectorAll<HTMLAnchorElement>('nav a'));
    const contactLinks = Array.from(element.querySelectorAll<HTMLAnchorElement>('address a'));

    expect(navigationLinks).toHaveLength(4);
    expect(navigationLinks.map((link) => link.getAttribute('hreflang'))).toEqual(
      Array(4).fill(LOCALES.enGB),
    );
    expect(contactLinks).toHaveLength(4);
    expect(contactLinks.filter((link) => link.target === '_blank')).toHaveLength(3);
    expect(
      contactLinks
        .filter((link) => link.target === '_blank')
        .every((link) => link.rel === 'noopener noreferrer'),
    ).toBe(true);
  });

  it('should render the current year', () => {
    expect((fixture.nativeElement as HTMLElement).textContent).toContain(
      new Date().getFullYear().toString(),
    );
  });
});
