import { Technology } from '../data/technologies.data';

export interface Stack {
  readonly id: string;
  readonly category: string;
  readonly technologies: readonly Technology[];
}
