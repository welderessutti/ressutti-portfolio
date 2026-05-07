export interface StackItem {
  name: string;
  icon: string;
}

export interface Stack {
  id: string;
  category: string;
  stacks: StackItem[];
}
