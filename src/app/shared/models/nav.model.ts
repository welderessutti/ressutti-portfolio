export interface NavBase {
  id: string;
  path: string;
}

export interface Nav extends NavBase {
  label: string;
}
