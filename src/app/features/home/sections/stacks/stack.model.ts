export interface StackItem {
  name: string;
  icon: string;
}

export interface StackBase {
  id: string;
  stacks: StackItem[];
}

export interface Stack extends StackBase {
  category: string;
}
