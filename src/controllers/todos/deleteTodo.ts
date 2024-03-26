import { FastifyRequest, FastifyReply } from "fastify";
import { db } from "../../database";

interface IDeleteTodoParams {
	todo_id: string;
}

export const deleteTodo = (request: FastifyRequest, reply: FastifyReply) => {
	const todo_id = (request.params as IDeleteTodoParams)?.todo_id;
	const todoToDelete = db.todo.find((todo) => todo.id === todo_id);

	if (!todoToDelete) {
		// Todo with given ID not found
		reply.status(404).send({ message: "Todo not found" });
		return;
	}

	db.todo = db.todo.filter((todo) => todo.id !== todo_id);
	reply.send("Todo deleted");
};
