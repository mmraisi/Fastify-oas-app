import { FastifyRequest, FastifyReply } from "fastify";
import { ITodo } from "../../database/todo";
import { db } from "../../database";
import { v4 as uuidv4 } from "uuid";

export const createTodo = (request: FastifyRequest, reply: FastifyReply) => {
	const newTodo: ITodo = {
		id: uuidv4(),
		...(request.body as Omit<ITodo, "id">),
	};

	db.todo.push(newTodo);

	reply.code(201).send(newTodo);
};
