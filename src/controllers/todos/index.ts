import { createTodo } from './createTodo';
import { deleteTodo } from './deleteTodo';
import { getTodoById } from './getTodoById';
import { getTodos } from './getTodos';
import { updateTodo } from './updateTodo';

export const todoController = {
  createTodo,
  updateTodo,
  getTodoById,
  getTodos,
  deleteTodo,
};
