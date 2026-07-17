import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectListCard } from './project-list-card';

describe('ProjectListCard', () => {
  let component: ProjectListCard;
  let fixture: ComponentFixture<ProjectListCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectListCard],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectListCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
