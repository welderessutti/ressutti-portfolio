import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { About } from './about';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render one page heading and the main sections', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('h1')).toHaveLength(1);
    expect(element.querySelectorAll('article > section')).toHaveLength(5);
  });

  it('should render four principles and four capability groups', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('[aria-labelledby="about-principles-title"] li')).toHaveLength(
      4,
    );
    expect(
      element.querySelectorAll(
        '[aria-labelledby="about-capabilities-title"] > div > div > section',
      ),
    ).toHaveLength(4);
  });
});
