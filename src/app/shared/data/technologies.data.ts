export const TECHNOLOGIES = {
  java: {
    id: 'java',
    name: 'Java',
    icon: '/assets/icons/technologies/java.svg',
  },

  spring: {
    id: 'spring',
    name: 'Spring',
    icon: '/assets/icons/technologies/spring.svg',
  },

  angular: {
    id: 'angular',
    name: 'Angular',
    icon: '/assets/icons/technologies/angular.svg',
  },

  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    icon: '/assets/icons/technologies/typescript.svg',
  },

  javascript: {
    id: 'javascript',
    name: 'JavaScript',
    icon: '/assets/icons/technologies/javascript.svg',
  },

  tailwindCss: {
    id: 'tailwind-css',
    name: 'Tailwind CSS',
    icon: '/assets/icons/technologies/tailwindcss.svg',
  },

  html: {
    id: 'html',
    name: 'HTML',
    icon: '/assets/icons/technologies/html.svg',
  },

  css: {
    id: 'css',
    name: 'CSS',
    icon: '/assets/icons/technologies/css.svg',
  },

  nodeJs: {
    id: 'nodejs',
    name: 'Node.js',
    icon: '/assets/icons/technologies/nodejs.svg',
  },

  mongodb: {
    id: 'mongodb',
    name: 'MongoDB',
    icon: '/assets/icons/technologies/mongodb.svg',
  },

  mysql: {
    id: 'mysql',
    name: 'MySQL',
    icon: '/assets/icons/technologies/mysql.svg',
  },

  postgresql: {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: '/assets/icons/technologies/postgresql.svg',
  },

  docker: {
    id: 'docker',
    name: 'Docker',
    icon: '/assets/icons/technologies/docker.svg',
  },

  kubernetes: {
    id: 'kubernetes',
    name: 'Kubernetes',
    icon: '/assets/icons/technologies/kubernetes.svg',
  },

  aws: {
    id: 'aws',
    name: 'AWS',
    icon: '/assets/icons/technologies/aws.svg',
  },

  azure: {
    id: 'azure',
    name: 'Azure',
    icon: '/assets/icons/technologies/azure.svg',
  },

  gcp: {
    id: 'gcp',
    name: 'Google Cloud',
    icon: '/assets/icons/technologies/gcp.svg',
  },
} as const;

export type Technology = (typeof TECHNOLOGIES)[keyof typeof TECHNOLOGIES];
