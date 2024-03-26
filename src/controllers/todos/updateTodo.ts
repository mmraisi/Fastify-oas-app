import { FastifyRequest, FastifyReply } from "fastify";
import { db } from "../../database";
import { ITodo } from "../../database/todo";

interface IUpdateTodoParams {
	todo_id: string;
}

export const updateTodo = (request: FastifyRequest, reply: FastifyReply) => {
	const todo_id = (request.params as IUpdateTodoParams)?.todo_id;
	const todoPayload = request.body as Omit<ITodo, "id">;
	const todoToUpdate = db.todo.find((todo) => todo.id === todo_id);

	if (!todoToUpdate) {
		// Todo with given ID not found
		reply.status(404).send({ message: "Todo not found" });
		return;
	}

	// Update the todo directly in the database
	Object.assign(todoToUpdate, todoPayload);

	// Send response with updated todo
	reply.code(200).send(todoToUpdate);
};
