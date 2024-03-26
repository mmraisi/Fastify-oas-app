import { createTodo } from "./createTodo";
import { deleteTodo } from "./deleteTodo";
import { getTodoById } from "./getTodoById";
import { getTodos } from "./getTodos";
import { updateTodo } from "./updateTodo";

export const todoController = {
	"create-todo": createTodo,
	"update-todo": updateTodo,
	"get-todo": getTodoById,
	todos: getTodos,
	"delete-todo": deleteTodo,
};
