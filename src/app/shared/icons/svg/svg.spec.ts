import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Svg } from './svg';

describe('Svg', () => {
  let component: Svg;
  let fixture: ComponentFixture<Svg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Svg],
    }).compileComponents();

    fixture = TestBed.createComponent(Svg);
    fixture.componentRef.setInput('contact', 'email');
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it.each(['email', 'linkedin', 'github', 'whatsapp', 'download'])(
    'should render the decorative %s icon',
    async (contact) => {
      fixture.componentRef.setInput('contact', contact);
      await fixture.whenStable();

      const svg = (fixture.nativeElement as HTMLElement).querySelector('svg');

      expect(svg).not.toBeNull();
      expect(svg?.getAttribute('aria-hidden')).toBe('true');
    },
  );

  it('should render no fallback graphic for an unsupported icon', async () => {
    fixture.componentRef.setInput('contact', 'unsupported');
    await fixture.whenStable();

    expect((fixture.nativeElement as HTMLElement).querySelector('svg')).toBeNull();
  });
});
