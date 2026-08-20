import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { RevealOnScroll } from './reveal-on-scroll';

@Component({
  imports: [RevealOnScroll],
  template: '<div appRevealOnScroll></div>',
})
class TestHost {}

describe('RevealOnScroll', () => {
  it('should reveal content when IntersectionObserver is unavailable', async () => {
    await TestBed.configureTestingModule({
      imports: [TestHost],
    }).compileComponents();

    const fixture = TestBed.createComponent(TestHost);
    await fixture.whenStable();

    const element = fixture.nativeElement.querySelector('div') as HTMLDivElement;
    expect(element.classList.contains('show')).toBe(true);
  });
});
