import { FastifyRequest, FastifyReply } from 'fastify';
import { db } from '../../database';

interface IDeleteTodoParams {
  todoId: number;
}

export const deleteTodo = (request: FastifyRequest, reply: FastifyReply) => {
  const todoId = (request.params as IDeleteTodoParams)?.todoId;
  const todoToDelete = db.todo.find((todo) => todo.id === todoId);

  if (!todoToDelete) {
    // Todo with given ID not found
    reply.status(404).send({ message: 'Todo not found' });
    return;
  }

  db.todo = db.todo.filter((todo) => todo.id !== todoId);
  reply.send('success');
};
