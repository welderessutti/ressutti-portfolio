export interface ProjectBase {
  id: string;
  techs: string[];
  image: string;
  github: string;
  demo: string;
}

export interface Project extends ProjectBase {
  title: string;
  description: string;
}
