import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a compact contact page with one page heading', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('h1')).toHaveLength(1);
    expect(element.querySelector('article')).toBeTruthy();
    expect(element.querySelector('address')).toBeTruthy();
    expect(element.querySelectorAll('section')).toHaveLength(1);
  });

  it('should render the email address and mailto links', () => {
    const element = fixture.nativeElement as HTMLElement;
    const emailLinks = Array.from(
      element.querySelectorAll<HTMLAnchorElement>('a[href="mailto:welderessutti@gmail.com"]'),
    );

    expect(element.textContent).toContain('welderessutti@gmail.com');
    expect(emailLinks).toHaveLength(1);
  });

  it('should render the external contact channels safely', () => {
    const element = fixture.nativeElement as HTMLElement;
    const externalLinks = Array.from(
      element.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]'),
    );

    expect(externalLinks.map((link) => link.href)).toEqual([
      'https://www.linkedin.com/in/welderessutti/',
      'https://github.com/welderessutti',
      'https://wa.me/5519998085588',
    ]);
    expect(externalLinks.every((link) => link.rel === 'noopener noreferrer')).toBe(true);
  });

  it('should render the localised CV download link', () => {
    const element = fixture.nativeElement as HTMLElement;
    const cvLink = element.querySelector<HTMLAnchorElement>('a[download]');

    expect(cvLink?.getAttribute('href')).toBe('/documents/welder-ressutti-cv-en-gb.pdf');
  });
});
