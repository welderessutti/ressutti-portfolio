import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STACKS } from '../../../../../shared/data/stacks.data';
import { StackCard } from './stack-card';

describe('StackCard', () => {
  let component: StackCard;
  let fixture: ComponentFixture<StackCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackCard],
    }).compileComponents();

    fixture = TestBed.createComponent(StackCard);
    fixture.componentRef.setInput('stack', STACKS[0]);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the category and every technology with decorative icons', () => {
    const stack = STACKS[0];
    const element = fixture.nativeElement as HTMLElement;
    const images = Array.from(element.querySelectorAll<HTMLImageElement>('img'));

    expect(element.querySelector('h3')?.textContent).toContain(stack.category);
    expect(element.querySelectorAll('li')).toHaveLength(stack.technologies.length);
    expect(images.map((image) => image.getAttribute('src'))).toEqual(
      stack.technologies.map((technology) => technology.icon),
    );
    expect(images.every((image) => image.alt === '')).toBe(true);
  });
});
