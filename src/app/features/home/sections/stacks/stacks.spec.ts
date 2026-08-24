import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stacks } from './stacks';
import { STACKS } from '../../../../shared/data/stacks.data';

describe('Stacks', () => {
  let component: Stacks;
  let fixture: ComponentFixture<Stacks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Stacks],
    }).compileComponents();

    fixture = TestBed.createComponent(Stacks);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render every configured stack exactly once', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('app-stack-card')).toHaveLength(STACKS.length);
    expect(element.querySelectorAll(':scope > section h2')).toHaveLength(1);
  });
});
