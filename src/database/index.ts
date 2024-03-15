import { ITodo, todo } from './todo';

interface IDatabase {
  todo: ITodo[];
}

export const db: IDatabase = {
  todo,
};
