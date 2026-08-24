import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { PROJECTS } from '../../../shared/data/projects.data';
import { LOCALES } from '../../../shared/i18n/locales';
import { ProjectListCard } from './project-list-card';
import { TECHNOLOGIES } from '../../../shared/data/technologies.data';

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

  it('should render stable image dimensions and limit the visible technology list', () => {
    const project = PROJECTS[0];
    const element = fixture.nativeElement as HTMLElement;
    const image = element.querySelector<HTMLImageElement>('img');
    const technologyItems = element.querySelectorAll('ul[aria-label="Technologies"] li');

    expect(image?.getAttribute('src')).toBe(project.coverImage.src);
    expect(image?.width).toBe(project.coverImage.width);
    expect(image?.height).toBe(project.coverImage.height);
    expect(technologyItems).toHaveLength(
      Math.min(project.technologies.length, 5) + (project.technologies.length > 5 ? 1 : 0),
    );
  });

  it('should summarize technologies beyond the five visible entries', async () => {
    fixture.componentRef.setInput('project', {
      ...PROJECTS[0],
      technologies: Object.values(TECHNOLOGIES).slice(0, 7),
    });
    await fixture.whenStable();

    const technologyItems = (fixture.nativeElement as HTMLElement).querySelectorAll(
      'ul[aria-label="Technologies"] li',
    );

    expect(technologyItems).toHaveLength(6);
    expect(technologyItems[5]?.textContent?.trim()).toBe('+2');
  });

  it('should render internal detail links with locale and full accessible context', () => {
    const project = PROJECTS[0];
    const links = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLAnchorElement>(
        `a[href$="/${project.slug}"]`,
      ),
    );

    expect(links).toHaveLength(2);
    expect(links.every((link) => link.hreflang === LOCALES.enGB)).toBe(true);
    expect(links.every((link) => link.textContent?.includes(project.title))).toBe(true);
  });

  it('should render optional external actions safely when URLs are available', async () => {
    fixture.componentRef.setInput('project', {
      ...PROJECTS[0],
      liveUrl: 'https://example.com/demo',
      repositoryUrl: 'https://example.com/source',
    });
    await fixture.whenStable();

    const externalLinks = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLAnchorElement>(
        'a[target="_blank"]',
      ),
    );

    expect(externalLinks.map((link) => link.href)).toEqual([
      'https://example.com/demo',
      'https://example.com/source',
    ]);
    expect(externalLinks.every((link) => link.rel === 'noopener noreferrer')).toBe(true);
  });
});
