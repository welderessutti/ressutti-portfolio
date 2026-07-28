import { Stack } from '../models/stack.model';
import { TECHNOLOGIES } from '../data/technologies.data';

export const STACKS: Stack[] = [
  {
    id: 'frontend',
    category: 'Frontend',
    technologies: [
      TECHNOLOGIES.angular,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.tailwindcss,
      TECHNOLOGIES.html5,
      TECHNOLOGIES.css3,
    ],
  },

  {
    id: 'backend',
    category: 'Backend',
    technologies: [TECHNOLOGIES.spring, TECHNOLOGIES.java, TECHNOLOGIES.nodejs],
  },

  {
    id: 'database',
    category: $localize`:@@home.stacks.category.database:Database`,
    technologies: [
      TECHNOLOGIES.postgresql,
      TECHNOLOGIES.mysql,
      TECHNOLOGIES.mongodb,
      TECHNOLOGIES.redis,
    ],
  },

  {
    id: 'devops',
    category: 'DevOps',
    technologies: [TECHNOLOGIES.git, TECHNOLOGIES.docker, TECHNOLOGIES.aws, TECHNOLOGIES.azure],
  },
];
