export const TECHNOLOGIES = {
  java: {
    id: 'java',
    name: 'Java',
    icon: '/icons/stacks/java.svg',
  },

  spring: {
    id: 'spring',
    name: 'Spring',
    icon: '/icons/stacks/spring.svg',
  },

  kotlin: {
    id: 'kotlin',
    name: 'Kotlin',
    icon: '/icons/stacks/kotlin.svg',
  },

  rabbitMq: {
    id: 'rabbitMq',
    name: 'RabbitMQ',
    icon: '/icons/stacks/rabbitmq.svg',
  },

  jUnit: {
    id: 'jUnit',
    name: 'JUnit',
    icon: '/icons/stacks/junit.svg',
  },

  cucumber: {
    id: 'cucumber',
    name: 'Cucumber',
    icon: '/icons/stacks/cucumber.svg',
  },

  angular: {
    id: 'angular',
    name: 'Angular',
    icon: '/icons/stacks/angular.svg',
  },

  typeScript: {
    id: 'typeScript',
    name: 'TypeScript',
    icon: '/icons/stacks/typescript.svg',
  },

  javaScript: {
    id: 'javaScript',
    name: 'JavaScript',
    icon: '/icons/stacks/javascript.svg',
  },

  tailwindCss: {
    id: 'tailwindCss',
    name: 'Tailwind CSS',
    icon: '/icons/stacks/tailwindcss.svg',
  },

  html5: {
    id: 'html5',
    name: 'HTML5',
    icon: '/icons/stacks/html5.svg',
  },

  css3: {
    id: 'css3',
    name: 'CSS3',
    icon: '/icons/stacks/css3.svg',
  },

  nodejs: {
    id: 'nodejs',
    name: 'Node.js',
    icon: '/icons/stacks/nodejs.svg',
  },

  mongoDb: {
    id: 'mongoDb',
    name: 'MongoDB',
    icon: '/icons/stacks/mongodb.svg',
  },

  mySql: {
    id: 'mySql',
    name: 'MySQL',
    icon: '/icons/stacks/mysql.svg',
  },

  postgreSql: {
    id: 'postgreSql',
    name: 'PostgreSQL',
    icon: '/icons/stacks/postgresql.svg',
  },

  redis: {
    id: 'redis',
    name: 'Redis',
    icon: '/icons/stacks/redis.svg',
  },

  docker: {
    id: 'docker',
    name: 'Docker',
    icon: '/icons/stacks/docker.svg',
  },

  git: {
    id: 'git',
    name: 'Git',
    icon: '/icons/stacks/git.svg',
  },

  gitHub: {
    id: 'gitHub',
    name: 'GitHub',
    icon: '/icons/stacks/github.svg',
  },

  gitHubActions: {
    id: 'gitHubActions',
    name: 'GitHub Actions',
    icon: '/icons/stacks/githubactions.svg',
  },

  aws: {
    id: 'aws',
    name: 'AWS',
    icon: '/icons/stacks/amazonwebservices.svg',
  },

  azure: {
    id: 'azure',
    name: 'Azure',
    icon: '/icons/stacks/azure.svg',
  },

  gcp: {
    id: 'gcp',
    name: 'Google Cloud',
    icon: '/icons/stacks/googlecloud.svg',
  },

  figma: {
    id: 'figma',
    name: 'Figma',
    icon: '/icons/stacks/figma.svg',
  },

  gimp: {
    id: 'gimp',
    name: 'Gimp',
    icon: '/icons/stacks/gimp.svg',
  },

  linux: {
    id: 'linux',
    name: 'Linux',
    icon: '/icons/stacks/linux.svg',
  },

  windows: {
    id: 'windows',
    name: 'Windows',
    icon: '/icons/stacks/windows11.svg',
  },

  android: {
    id: 'android',
    name: 'Android',
    icon: '/icons/stacks/android.svg',
  },

  visualStudioCode: {
    id: 'visualStudioCode',
    name: 'Visual Studio Code',
    icon: '/icons/stacks/vscode.svg',
  },

  intelliJ: {
    id: 'intelliJ',
    name: 'IntelliJ',
    icon: '/icons/stacks/intellij.svg',
  },

  androidStudio: {
    id: 'androidStudio',
    name: 'Android Studio',
    icon: '/icons/stacks/androidstudio.svg',
  },

  insomnia: {
    id: 'insomnia',
    name: 'Insomnia',
    icon: '/icons/stacks/insomnia.svg',
  },

  postman: {
    id: 'postman',
    name: 'Postman',
    icon: '/icons/stacks/postman.svg',
  },

  nanoBanana: {
    id: 'nanoBanana',
    name: 'Nano Banana',
    icon: '/icons/stacks/nanobanana.svg',
  },

  claudeCode: {
    id: 'claudeCode',
    name: 'Claude Code',
    icon: '/icons/stacks/claude.svg',
  },

  Codex: {
    id: 'codex',
    name: 'Codex',
    icon: '/icons/stacks/codex.svg',
  },
} as const;

export type Technology = (typeof TECHNOLOGIES)[keyof typeof TECHNOLOGIES];
