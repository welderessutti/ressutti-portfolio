import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';

import { LanguageSwitcher } from './language-switcher';
import { Locale, LOCALES } from '../../../shared/i18n/locales';

@Component({
  template: '',
})
class RouteStub {}

describe('LanguageSwitcher', () => {
  let fixture: ComponentFixture<LanguageSwitcher>;
  let router: Router;

  async function createSwitcher(url = '/', locale: Locale = LOCALES.enGB): Promise<HTMLElement> {
    document.documentElement.lang = locale;
    await router.navigateByUrl(url);
    fixture = TestBed.createComponent(LanguageSwitcher);
    await fixture.whenStable();

    return fixture.nativeElement as HTMLElement;
  }

  beforeEach(async () => {
    document.cookie = 'preferred-language=;path=/;max-age=0';

    await TestBed.configureTestingModule({
      imports: [LanguageSwitcher],
      providers: [provideRouter([{ path: '**', component: RouteStub }])],
    }).compileComponents();

    router = TestBed.inject(Router);
  });

  afterEach(() => {
    document.cookie = 'preferred-language=;path=/;max-age=0';
    document.documentElement.lang = LOCALES.enGB;
  });

  it('should reflect the locale of the rendered document', async () => {
    const element = await createSwitcher('/', LOCALES.ptBR);
    const button = element.querySelector<HTMLButtonElement>('button');
    const currentOption = element.querySelector<HTMLAnchorElement>('a[aria-current="page"]');

    expect(button?.textContent).toContain(LOCALES.ptBR);
    expect(element.querySelector<HTMLImageElement>('button img')?.getAttribute('src')).toBe(
      '/icons/flags/pt-BR.svg',
    );
    expect(currentOption?.hreflang).toBe(LOCALES.ptBR);
  });

  it('should translate only the first route segment and preserve the remaining URL', async () => {
    const element = await createSwitcher(
      '/en-gb/projects/glicare;view=compact?source=header#overview',
    );
    const portugueseLink = element.querySelector<HTMLAnchorElement>('a[hreflang="pt-BR"]');

    expect(portugueseLink?.getAttribute('href')).toBe(
      '/pt-br/projetos/glicare;view=compact?source=header#overview',
    );
  });

  it('should build localised links when the router URL has no locale prefix', async () => {
    const element = await createSwitcher('/about?source=footer#education');

    expect(
      element.querySelector<HTMLAnchorElement>('a[hreflang="pt-BR"]')?.getAttribute('href'),
    ).toBe('/pt-br/sobre?source=footer#education');
    expect(
      element.querySelector<HTMLAnchorElement>('a[hreflang="en-GB"]')?.getAttribute('href'),
    ).toBe('/en-gb/about?source=footer#education');
  });

  it('should fall back to the target locale root for an unknown route', async () => {
    const element = await createSwitcher('/unknown/nested');

    expect(
      element.querySelector<HTMLAnchorElement>('a[hreflang="pt-BR"]')?.getAttribute('href'),
    ).toBe('/pt-br');
  });

  it('should expose open state and return focus to the trigger after Escape', async () => {
    const element = await createSwitcher();
    const button = element.querySelector<HTMLButtonElement>('button');
    const options = element.querySelector<HTMLElement>('#language-options');

    button?.click();
    fixture.detectChanges();

    expect(button?.getAttribute('aria-expanded')).toBe('true');
    expect(options?.getAttribute('aria-hidden')).toBe('false');
    expect(options?.hasAttribute('inert')).toBe(false);

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
    fixture.detectChanges();

    expect(button?.getAttribute('aria-expanded')).toBe('false');
    expect(options?.hasAttribute('inert')).toBe(true);
    expect(document.activeElement).toBe(button);
  });

  it('should close when focus leaves the switcher', async () => {
    const element = await createSwitcher();
    const button = element.querySelector<HTMLButtonElement>('button');
    const container = element.querySelector<HTMLElement>('#lang-switcher');

    button?.click();
    fixture.detectChanges();
    container?.dispatchEvent(
      new FocusEvent('focusout', { bubbles: true, relatedTarget: document.body }),
    );
    fixture.detectChanges();

    expect(button?.getAttribute('aria-expanded')).toBe('false');
  });

  it('should persist the selected language for subsequent visits', async () => {
    const element = await createSwitcher();
    const portugueseLink = element.querySelector<HTMLAnchorElement>('a[hreflang="pt-BR"]');

    portugueseLink?.addEventListener('click', (event) => event.preventDefault(), { once: true });
    portugueseLink?.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));

    expect(document.cookie).toContain(`preferred-language=${LOCALES.ptBR}`);
  });
});
