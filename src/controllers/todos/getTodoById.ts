import { FastifyRequest, FastifyReply } from 'fastify';
import { db } from '../../database';

interface IGetTodoByIdParams {
  todoId: number;
}

export const getTodoById = (request: FastifyRequest, reply: FastifyReply) => {
  const todoId = (request.params as IGetTodoByIdParams)?.todoId;
  const result = db.todo.find((todo) => todo.id === todoId) ?? {};
  reply.send(result);
};
