import { ComponentFixture, TestBed } from '@angular/core/testing';

import { About } from './about';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the highlights and quick overview as semantic lists', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('ul li')).toHaveLength(3);
    expect(element.querySelectorAll('dl > div')).toHaveLength(4);
    expect(element.querySelectorAll('dt')).toHaveLength(4);
    expect(element.querySelectorAll('dd')).toHaveLength(4);
  });
});
