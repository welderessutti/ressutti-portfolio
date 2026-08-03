export interface Contact {
  readonly id: string;
  readonly label: string;
  readonly accessibleLabel: string;
  readonly url: `mailto:${string}` | `https://${string}`;
  readonly external: boolean;
  readonly primary: boolean;
}
