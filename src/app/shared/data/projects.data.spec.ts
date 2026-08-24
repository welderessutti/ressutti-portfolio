import { PROJECTS } from './projects.data';

describe('project catalogue integrity', () => {
  it('should contain projects with unique ids and URL-safe slugs', () => {
    expect(PROJECTS.length).toBeGreaterThan(0);
    expect(new Set(PROJECTS.map((project) => project.id)).size).toBe(PROJECTS.length);
    expect(new Set(PROJECTS.map((project) => project.slug)).size).toBe(PROJECTS.length);
    expect(PROJECTS.every((project) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug))).toBe(true);
  });

  it('should provide complete, dimensioned images for listing, SEO and hero rendering', () => {
    for (const project of PROJECTS) {
      for (const image of [project.coverImage, project.seoImage, project.heroImage]) {
        expect(image.src).toMatch(/^images\//);
        expect(image.alt.trim().length).toBeGreaterThan(0);
        expect(image.width).toBeGreaterThan(0);
        expect(image.height).toBeGreaterThan(0);
      }
    }
  });

  it('should use the dedicated 1200 by 630 SEO image for Glicare', () => {
    const glicare = PROJECTS.find((project) => project.id === 'glicare');

    expect(glicare?.seoImage).toMatchObject({
      src: 'images/seo/projects/glicare/glicare-seo-image.webp',
      width: 1200,
      height: 630,
    });
  });

  it('should keep internal previous and next project references valid', () => {
    const slugs = new Set(PROJECTS.map((project) => project.slug));

    for (const project of PROJECTS) {
      for (const link of [project.previousProject, project.nextProject]) {
        if (!link) continue;

        const targetSlug = link.path.replace(/^\.\.\//, '');

        expect(link.path).toBe(`../${targetSlug}`);
        expect(slugs.has(targetSlug)).toBe(true);
        expect(targetSlug).not.toBe(project.slug);
        expect(link.label.trim().length).toBeGreaterThan(0);
      }
    }
  });

  it('should keep nested item identifiers unique within each project section', () => {
    for (const project of PROJECTS) {
      const sections = [
        project.features,
        project.stack,
        project.workflow,
        project.decisions,
        project.challenges,
        project.engineering,
        project.showcase,
      ];

      for (const section of sections) {
        if (!section) continue;

        const ids = section.map((item) => item.id);
        expect(new Set(ids).size).toBe(ids.length);
      }
    }
  });
});
