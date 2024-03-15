import { describe, expect, test } from 'vitest';
import server from '../src/server';
import { db } from '../src/database';
import { ITodo } from '../src/database/todo';

describe('Create Todo', () => {
  test('Should create todo', async () => {
    const newTodo: Omit<ITodo, 'id'> = {
      name: 'test_1',
      description: 'some desc',
    };

    const response = await server.inject({
      method: 'POST',
      url: '/todo',
      body: newTodo,
    });

    expect(response.statusCode).toEqual(201);
    expect(JSON.parse(response.body)?.name).toEqual(newTodo.name);
    expect(JSON.parse(response.body)?.description).toEqual(newTodo.description);
    expect(JSON.parse(response.body)?.id).toEqual(db.todo.length);
  });
});
