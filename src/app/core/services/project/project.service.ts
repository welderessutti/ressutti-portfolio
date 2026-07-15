import { Injectable } from '@angular/core';
import { PROJECTS } from '../../../shared/data/projects.data';
import { Project } from '../../../shared/models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly projects: readonly Project[] = PROJECTS;

  public getAllProjects(): readonly Project[] {
    return this.projects;
  }

  public getFeaturedProjects(): readonly Project[] {
    return this.projects.filter((project) => project.featured);
  }

  public getProjectBySlug(slug: string): Project | undefined {
    return this.projects.find((project) => project.slug === slug);
  }

  public getProjectById(id: string): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }

  public existsProjectBySlug(slug: string): boolean {
    return this.projects.some((project) => project.slug === slug);
  }
}
