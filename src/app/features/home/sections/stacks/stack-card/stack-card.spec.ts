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
});
