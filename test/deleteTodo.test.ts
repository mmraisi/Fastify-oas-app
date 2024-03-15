import { describe, expect, test } from 'vitest';
import server from '../src/server';
import { ITodo } from '../src/database/todo';
import { db } from '../src/database';

describe('Delete todo', () => {
  test('Should delete Todo', async () => {
    const newTodo: Omit<ITodo, 'id'> = {
      name: 'test_1',
      description: 'some desc',
    };

    const addedTodo = await server.inject({
      method: 'POST',
      url: '/todo',
      body: newTodo,
    });
    expect(addedTodo.statusCode).toEqual(201);

    const response = await server.inject({
      method: 'DELETE',
      url: `/todo/${JSON.parse(addedTodo?.body)?.id}`,
    });

    expect(response.statusCode).toEqual(200);
    expect(response.headers['content-type']).toEqual(
      'text/plain; charset=utf-8'
    );
    expect(typeof response.body).toEqual('string');
  });

  test('should return 404', async () => {
    const response = await server.inject({
      method: 'DELETE',
      url: `/todo/${db.todo.length + 12}`,
      body: {},
    });

    expect(response.statusCode).toEqual(404);
  });
});
