import { Stack } from '../models/stack.model';
import { TECHNOLOGIES } from '../data/technologies.data';

export const STACKS: Stack[] = [
  {
    id: 'front-end',
    category: 'Front-end',
    technologies: [TECHNOLOGIES.angular, TECHNOLOGIES.typeScript, TECHNOLOGIES.tailwindCss],
  },

  {
    id: 'back-end',
    category: 'Back-end',
    technologies: [TECHNOLOGIES.spring, TECHNOLOGIES.java, TECHNOLOGIES.kotlin],
  },

  {
    id: 'database',
    category: $localize`:@@home.stacks.category.database:Database`,
    technologies: [TECHNOLOGIES.postgreSql, TECHNOLOGIES.mySql, TECHNOLOGIES.mongoDb],
  },

  {
    id: 'messaging',
    category: 'Messaging',
    technologies: [TECHNOLOGIES.rabbitMq],
  },

  {
    id: 'qa',
    category: 'QA',
    technologies: [TECHNOLOGIES.jUnit, TECHNOLOGIES.cucumber],
  },

  {
    id: 'devops&ci/cd',
    category: 'DevOps & CI/CD',
    technologies: [
      TECHNOLOGIES.docker,
      TECHNOLOGIES.git,
      TECHNOLOGIES.gitHub,
      TECHNOLOGIES.gitHubActions,
    ],
  },

  {
    id: 'cloud',
    category: 'Cloud',
    technologies: [TECHNOLOGIES.aws, TECHNOLOGIES.azure, TECHNOLOGIES.gcp],
  },

  {
    id: 'ia',
    category: 'IA',
    technologies: [TECHNOLOGIES.Codex, TECHNOLOGIES.claudeCode, TECHNOLOGIES.nanoBanana],
  },

  {
    id: 'os',
    category: 'OS',
    technologies: [TECHNOLOGIES.linux, TECHNOLOGIES.windows, TECHNOLOGIES.android],
  },

  {
    id: 'ide',
    category: 'IDE',
    technologies: [
      TECHNOLOGIES.intelliJ,
      TECHNOLOGIES.visualStudioCode,
      TECHNOLOGIES.androidStudio,
    ],
  },

  {
    id: 'design',
    category: 'Design',
    technologies: [TECHNOLOGIES.figma, TECHNOLOGIES.gimp],
  },
];
