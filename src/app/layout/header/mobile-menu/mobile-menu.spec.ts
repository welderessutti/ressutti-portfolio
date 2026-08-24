import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { MobileMenu, MobileMenuCloseReason } from './mobile-menu';
import { Contact } from '../../../shared/models/contact.model';
import { Nav } from '../../../shared/models/nav.model';

describe('MobileMenu', () => {
  let component: MobileMenu;
  let fixture: ComponentFixture<MobileMenu>;

  const navs: Nav[] = [
    { id: 'home', label: 'Home', path: '/', locale: 'en-GB' },
    { id: 'projects', label: 'Projects', path: '/projects', locale: 'en-GB' },
  ];
  const contacts: Contact[] = [
    {
      id: 'email',
      label: 'Email',
      accessibleLabel: 'Send an email',
      url: 'mailto:test@example.com',
      external: false,
      primary: true,
    },
    {
      id: 'github',
      label: 'GitHub',
      accessibleLabel: 'Open GitHub',
      url: 'https://github.com/example',
      external: true,
      primary: false,
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileMenu],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileMenu);
    fixture.componentRef.setInput('navs', navs);
    fixture.componentRef.setInput('contacts', contacts);
    fixture.componentRef.setInput('cvPath', 'documents/cv.pdf');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should keep the closed drawer inert and hidden from assistive technology', () => {
    const drawer = (fixture.nativeElement as HTMLElement).querySelector('#mobile-menu');

    expect(component).toBeTruthy();
    expect(drawer?.getAttribute('aria-hidden')).toBe('true');
    expect(drawer?.hasAttribute('inert')).toBe(true);
  });

  it('should expose an open drawer and render its navigation and contact data', async () => {
    fixture.componentRef.setInput('isOpen', true);
    await fixture.whenStable();
    const element = fixture.nativeElement as HTMLElement;
    const drawer = element.querySelector('#mobile-menu');
    const externalLink = element.querySelector<HTMLAnchorElement>(
      'a[href="https://github.com/example"]',
    );

    expect(drawer?.getAttribute('aria-hidden')).toBe('false');
    expect(drawer?.hasAttribute('inert')).toBe(false);
    expect(element.querySelectorAll('nav a')).toHaveLength(navs.length);
    expect(element.querySelectorAll('address a')).toHaveLength(contacts.length);
    expect(externalLink?.target).toBe('_blank');
    expect(externalLink?.rel).toBe('noopener noreferrer');
    expect(element.querySelector<HTMLAnchorElement>('a[download]')?.getAttribute('href')).toBe(
      'documents/cv.pdf',
    );
  });

  it('should emit an explicit reason for overlay, navigation and contact actions', () => {
    const emittedReasons: MobileMenuCloseReason[] = [];
    component.closeRequested.subscribe((reason) => emittedReasons.push(reason));
    const element = fixture.nativeElement as HTMLElement;
    const navigationLink = element.querySelector<HTMLAnchorElement>('nav a');
    const contactLink = element.querySelector<HTMLAnchorElement>('address a');

    navigationLink?.addEventListener('click', (event) => event.preventDefault(), { once: true });
    contactLink?.addEventListener('click', (event) => event.preventDefault(), { once: true });

    element.querySelector<HTMLElement>('[aria-hidden="true"]')?.click();
    navigationLink?.click();
    contactLink?.click();

    expect(emittedReasons).toEqual(['dismiss', 'navigation', 'action']);
  });

  it('should request closure only when focus leaves the drawer', () => {
    const emittedReasons: MobileMenuCloseReason[] = [];
    component.closeRequested.subscribe((reason) => emittedReasons.push(reason));
    const drawer = (fixture.nativeElement as HTMLElement).querySelector<HTMLElement>(
      '#mobile-menu',
    );
    const innerLink = drawer?.querySelector('a') ?? null;

    drawer?.dispatchEvent(new FocusEvent('focusout', { bubbles: true, relatedTarget: innerLink }));
    drawer?.dispatchEvent(
      new FocusEvent('focusout', { bubbles: true, relatedTarget: document.body }),
    );

    expect(emittedReasons).toEqual(['focus-leave']);
  });
});
