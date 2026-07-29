const PATH = 'icons/stacks/';

export const TECHNOLOGIES = {
  java: {
    id: 'java',
    name: 'Java',
    icon: `${PATH}java.svg`,
  },

  spring: {
    id: 'spring',
    name: 'Spring',
    icon: `${PATH}spring.svg`,
  },

  kotlin: {
    id: 'kotlin',
    name: 'Kotlin',
    icon: `${PATH}kotlin.svg`,
  },

  rabbitMq: {
    id: 'rabbitMq',
    name: 'RabbitMQ',
    icon: `${PATH}rabbitmq.svg`,
  },

  jUnit: {
    id: 'jUnit',
    name: 'JUnit',
    icon: `${PATH}junit.svg`,
  },

  cucumber: {
    id: 'cucumber',
    name: 'Cucumber',
    icon: `${PATH}cucumber.svg`,
  },

  angular: {
    id: 'angular',
    name: 'Angular',
    icon: `${PATH}angular.svg`,
  },

  typeScript: {
    id: 'typeScript',
    name: 'TypeScript',
    icon: `${PATH}typescript.svg`,
  },

  javaScript: {
    id: 'javaScript',
    name: 'JavaScript',
    icon: `${PATH}javascript.svg`,
  },

  tailwindCss: {
    id: 'tailwindCss',
    name: 'Tailwind CSS',
    icon: `${PATH}tailwindcss.svg`,
  },

  html5: {
    id: 'html5',
    name: 'HTML5',
    icon: `${PATH}html5.svg`,
  },

  css3: {
    id: 'css3',
    name: 'CSS3',
    icon: `${PATH}css3.svg`,
  },

  nodejs: {
    id: 'nodejs',
    name: 'Node.js',
    icon: `${PATH}nodejs.svg`,
  },

  mongoDb: {
    id: 'mongoDb',
    name: 'MongoDB',
    icon: `${PATH}mongodb.svg`,
  },

  mySql: {
    id: 'mySql',
    name: 'MySQL',
    icon: `${PATH}mysql.svg`,
  },

  postgreSql: {
    id: 'postgreSql',
    name: 'PostgreSQL',
    icon: `${PATH}postgresql.svg`,
  },

  redis: {
    id: 'redis',
    name: 'Redis',
    icon: `${PATH}redis.svg`,
  },

  docker: {
    id: 'docker',
    name: 'Docker',
    icon: `${PATH}docker.svg`,
  },

  git: {
    id: 'git',
    name: 'Git',
    icon: `${PATH}git.svg`,
  },

  gitHub: {
    id: 'gitHub',
    name: 'GitHub',
    icon: `${PATH}github.svg`,
  },

  gitHubActions: {
    id: 'gitHubActions',
    name: 'GitHub Actions',
    icon: `${PATH}githubactions.svg`,
  },

  aws: {
    id: 'aws',
    name: 'AWS',
    icon: `${PATH}amazonwebservices.svg`,
  },

  azure: {
    id: 'azure',
    name: 'Azure',
    icon: `${PATH}azure.svg`,
  },

  gcp: {
    id: 'gcp',
    name: 'Google Cloud',
    icon: `${PATH}googlecloud.svg`,
  },

  figma: {
    id: 'figma',
    name: 'Figma',
    icon: `${PATH}figma.svg`,
  },

  gimp: {
    id: 'gimp',
    name: 'Gimp',
    icon: `${PATH}gimp.svg`,
  },

  linux: {
    id: 'linux',
    name: 'Linux',
    icon: `${PATH}linux.svg`,
  },

  windows: {
    id: 'windows',
    name: 'Windows',
    icon: `${PATH}windows11.svg`,
  },

  android: {
    id: 'android',
    name: 'Android',
    icon: `${PATH}android.svg`,
  },

  visualStudioCode: {
    id: 'visualStudioCode',
    name: 'Visual Studio Code',
    icon: `${PATH}vscode.svg`,
  },

  intelliJ: {
    id: 'intelliJ',
    name: 'IntelliJ',
    icon: `${PATH}intellij.svg`,
  },

  androidStudio: {
    id: 'androidStudio',
    name: 'Android Studio',
    icon: `${PATH}androidstudio.svg`,
  },

  insomnia: {
    id: 'insomnia',
    name: 'Insomnia',
    icon: `${PATH}insomnia.svg`,
  },

  postman: {
    id: 'postman',
    name: 'Postman',
    icon: `${PATH}postman.svg`,
  },

  nanoBanana: {
    id: 'nanoBanana',
    name: 'Nano Banana',
    icon: `${PATH}nanobanana.svg`,
  },

  claudeCode: {
    id: 'claudeCode',
    name: 'Claude Code',
    icon: `${PATH}claude.svg`,
  },

  Codex: {
    id: 'codex',
    name: 'Codex',
    icon: `${PATH}codex.svg`,
  },
} as const;

export type Technology = (typeof TECHNOLOGIES)[keyof typeof TECHNOLOGIES];
