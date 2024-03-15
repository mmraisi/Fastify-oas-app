import { FastifyRequest, FastifyReply } from 'fastify';
import { ITodo } from '../../database/todo';
import { db } from '../../database';

export const createTodo = (request: FastifyRequest, reply: FastifyReply) => {
  const newTodo = request.body as Omit<ITodo, 'id'>;

  db.todo.push({
    id: db.todo.length + 1,
    ...newTodo,
  });

  reply.send(db.todo.pop());
};
