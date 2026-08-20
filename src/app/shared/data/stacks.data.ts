import { Stack } from '../models/stack.model';
import { TECHNOLOGIES } from '../data/technologies.data';

export const STACKS: Stack[] = [
  {
    id: 'front-end',
    category: $localize`:@@home.stacks.category.frontEnd.label:Front-end`,
    technologies: [TECHNOLOGIES.angular, TECHNOLOGIES.typeScript, TECHNOLOGIES.tailwindCss],
  },

  {
    id: 'back-end',
    category: $localize`:@@home.stacks.category.backEnd.label:Back-end`,
    technologies: [TECHNOLOGIES.spring, TECHNOLOGIES.java, TECHNOLOGIES.kotlin],
  },

  {
    id: 'database',
    category: $localize`:@@home.stacks.category.database.label:Database`,
    technologies: [TECHNOLOGIES.postgreSql, TECHNOLOGIES.mySql, TECHNOLOGIES.mongoDb],
  },

  {
    id: 'messaging',
    category: $localize`:@@home.stacks.category.messaging.label:Messaging`,
    technologies: [TECHNOLOGIES.rabbitMq],
  },

  {
    id: 'testing',
    category: $localize`:@@home.stacks.category.testing.label:Testing`,
    technologies: [TECHNOLOGIES.jUnit, TECHNOLOGIES.cucumber],
  },

  {
    id: 'devops&ci/cd',
    category: $localize`:@@home.stacks.category.devOpsCiCd.label:DevOps & CI/CD`,
    technologies: [
      TECHNOLOGIES.docker,
      TECHNOLOGIES.git,
      TECHNOLOGIES.gitHub,
      TECHNOLOGIES.gitHubActions,
    ],
  },

  {
    id: 'cloud',
    category: $localize`:@@home.stacks.category.cloud.label:Cloud`,
    technologies: [TECHNOLOGIES.aws, TECHNOLOGIES.azure, TECHNOLOGIES.gcp],
  },

  {
    id: 'ai',
    category: $localize`:@@home.stacks.category.artificialIntelligence.label:AI`,
    technologies: [TECHNOLOGIES.codex, TECHNOLOGIES.claudeCode, TECHNOLOGIES.nanoBanana],
  },

  {
    id: 'os',
    category: $localize`:@@home.stacks.category.operatingSystems.label:OS`,
    technologies: [TECHNOLOGIES.linux, TECHNOLOGIES.windows, TECHNOLOGIES.android],
  },

  {
    id: 'ide',
    category: $localize`:@@home.stacks.category.developmentEnvironments.label:IDE`,
    technologies: [
      TECHNOLOGIES.intelliJ,
      TECHNOLOGIES.webstorm,
      TECHNOLOGIES.datagrip,
      TECHNOLOGIES.visualStudioCode,
      TECHNOLOGIES.androidStudio,
    ],
  },

  {
    id: 'design',
    category: $localize`:@@home.stacks.category.design.label:Design`,
    technologies: [TECHNOLOGIES.figma, TECHNOLOGIES.gimp, TECHNOLOGIES.blender],
  },
];
