import { FastifyRequest, FastifyReply } from 'fastify';
import { db } from '../../database';

interface IDeleteTodoParams {
  id: number;
}

export const updateTodo = (request: FastifyRequest, reply: FastifyReply) => {
  const todoId = (request.params as IDeleteTodoParams)?.id;
  const todoToUpdate = db.todo.find((todo) => todo.id === todoId);

  if (!todoToUpdate) {
    // Todo with given ID not found
    reply.status(404).send({ message: 'Todo not found' });
    return;
  }

  db.todo = db.todo.filter((todo) => todo.id !== todoId);
  reply.send(db.todo);
};
