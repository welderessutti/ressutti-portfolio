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

  it('should render stable image dimensions and an accessible details link', () => {
    const project = PROJECTS[0];
    const element = fixture.nativeElement as HTMLElement;
    const image = element.querySelector<HTMLImageElement>('img');
    const link = element.querySelector<HTMLAnchorElement>('a');

    expect(image?.getAttribute('src')).toBe(project.coverImage.src);
    expect(image?.alt).toBe(project.coverImage.alt);
    expect(image?.width).toBe(project.coverImage.width);
    expect(image?.height).toBe(project.coverImage.height);
    expect(image?.getAttribute('loading')).toBe('lazy');
    expect(link?.getAttribute('href')).toBe(`/projects/${project.slug}`);
    expect(link?.hreflang).toBe(LOCALES.enGB);
    expect(link?.textContent).toContain(project.title);
  });
});
