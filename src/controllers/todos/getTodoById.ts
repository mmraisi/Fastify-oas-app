import { FastifyRequest, FastifyReply } from "fastify";
import { db } from "../../database";

interface IGetTodoByIdParams {
	todo_id: string;
}

export const getTodoById = (request: FastifyRequest, reply: FastifyReply) => {
	const todo_id = (request.params as IGetTodoByIdParams)?.todo_id;
	const result = db.todo.find((todo) => todo.id === todo_id);

	if (!result) {
		reply.status(404).send({ message: "Todo not found" });
		return;
	}
	reply.send(result);
};
