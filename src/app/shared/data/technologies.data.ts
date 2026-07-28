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

  angular: {
    id: 'angular',
    name: 'Angular',
    icon: '/icons/stacks/angular.svg',
  },

  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    icon: '/icons/stacks/typescript.svg',
  },

  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    icon: '/icons/stacks/javascript.svg',
  },

  tailwindcss: {
    id: 'tailwind-css',
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

  mongodb: {
    id: 'mongodb',
    name: 'MongoDB',
    icon: '/icons/stacks/mongodb.svg',
  },

  mysql: {
    id: 'mysql',
    name: 'MySQL',
    icon: '/icons/stacks/mysql.svg',
  },

  postgresql: {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: '/icons/stacks/postgresql.svg',
  },

  redis: {
    id: 'redis',
    name: 'redis',
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

  github: {
    id: 'github',
    name: 'GitHub',
    icon: '/icons/stacks/github.svg',
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
} as const;

export type Technology = (typeof TECHNOLOGIES)[keyof typeof TECHNOLOGIES];
