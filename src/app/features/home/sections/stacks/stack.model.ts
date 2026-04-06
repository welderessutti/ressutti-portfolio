export interface StackItem {
  name: string;
  icon: string;
}

export interface Stack {
  category: string;
  stacks: StackItem[];
}
