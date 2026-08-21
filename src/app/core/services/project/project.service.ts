import { Injectable } from '@angular/core';
import { PROJECTS } from '../../../shared/data/projects.data';
import { Project } from '../../../shared/models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private readonly projects: readonly Project[] = PROJECTS;

  public getProjectById(id: string): Project | undefined {
    return this.projects.find((project) => project.id === id);
  }

  public getAllProjects(): readonly Project[] {
    return this.projects;
  }

  public getFeaturedProjects(): readonly Project[] {
    return this.projects.filter((project) => project.isFeatured);
  }

  public getProjectBySlug(slug: string): Project | undefined {
    return this.projects.find((project) => project.slug === slug);
  }

  public existsProjectBySlug(slug: string): boolean {
    return this.projects.some((project) => project.slug === slug);
  }
}
