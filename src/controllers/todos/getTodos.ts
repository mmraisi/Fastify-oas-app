import { FastifyRequest, FastifyReply } from 'fastify';
import { db } from '../../database';

export const getTodos = (_: FastifyRequest, reply: FastifyReply) => {
  reply.send(db.todo);
};
