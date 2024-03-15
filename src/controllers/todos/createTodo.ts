import { FastifyRequest, FastifyReply } from 'fastify';
import { ITodo } from '../../database/todo';
import { db } from '../../database';

export const createTodo = (request: FastifyRequest, reply: FastifyReply) => {
  const newTodo: ITodo = {
    id: db.todo.length + 1,
    ...(request.body as Omit<ITodo, 'id'>),
  };

  db.todo.push(newTodo);

  reply.code(201).send(newTodo);
};
