export interface ITodo {
  id: number;
  name: string;
  description?: string;
}

export const todo: ITodo[] = [
  {
    id: 1,
    name: 'item_1',
    description: 'Description of item 1',
  },
  {
    id: 2,
    name: 'item_2',
    description: 'Description of item 2',
  },
  {
    id: 3,
    name: 'item_3',
    description: 'Description of item 3',
  },
];
