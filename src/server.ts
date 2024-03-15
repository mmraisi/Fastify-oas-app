import fastify from 'fastify';
import oas from 'oas-fastify';
import { todoController as handler } from './controllers/todos/index';

import spec from '../openapi.json';

(spec as { $id?: string }).$id = '$';

const server = fastify();

// Integrate oas-fastify
server.register(oas, {
  spec,
  handler,
});

try {
  server.listen({ port: 3000 });
  console.log('app is listening on port:', 3000);
} catch (error) {
  server.log.error(error);
  console.log(error);
  process.exit(1);
}

export default server;
