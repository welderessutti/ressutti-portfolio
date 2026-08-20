import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenu, MobileMenuCloseReason } from './mobile-menu';

describe('MobileMenu', () => {
  let component: MobileMenu;
  let fixture: ComponentFixture<MobileMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileMenu],
    }).compileComponents();

    fixture = TestBed.createComponent(MobileMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an explicit reason when dismissal is requested', () => {
    const emittedReasons: MobileMenuCloseReason[] = [];
    component.closeRequested.subscribe((reason) => emittedReasons.push(reason));

    const overlay = fixture.nativeElement.querySelector('[aria-hidden="true"]') as HTMLElement;
    overlay.click();

    expect(emittedReasons).toEqual(['dismiss']);
  });
});
