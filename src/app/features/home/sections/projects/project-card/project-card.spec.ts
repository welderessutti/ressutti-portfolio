import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { PROJECTS } from '../../../../../shared/data/projects.data';
import { LOCALES } from '../../../../../shared/i18n/locales';
import { ProjectCard } from './project-card';

describe('ProjectCard', () => {
  let component: ProjectCard;
  let fixture: ComponentFixture<ProjectCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCard);
    fixture.componentRef.setInput('projectsPagePath', '/projects');
    fixture.componentRef.setInput('project', PROJECTS[0]);
    fixture.componentRef.setInput('currentLocale', LOCALES.enGB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
