import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { PROJECTS } from '../../../shared/data/projects.data';
import { LOCALES } from '../../../shared/i18n/locales';
import { ProjectListCard } from './project-list-card';

describe('ProjectListCard', () => {
  let component: ProjectListCard;
  let fixture: ComponentFixture<ProjectListCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectListCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectListCard);
    fixture.componentRef.setInput('project', PROJECTS[0]);
    fixture.componentRef.setInput('currentLocale', LOCALES.enGB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
