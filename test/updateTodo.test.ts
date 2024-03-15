import { describe, expect, test } from 'vitest';
import server from '../src/server';
import { db } from '../src/database';
import { ITodo } from '../src/database/todo';

describe('Update Todo', () => {
  test('should update todo', async () => {
    const updatePayload: Omit<ITodo, 'name' | 'id'> = {
      description: 'new desc',
    };
    const response = await server.inject({
      method: 'PUT',
      url: `/todo/${db.todo.length - 1}`,
      body: updatePayload,
    });

    expect(response.statusCode).toEqual(204);
  });

  test('should return 404', async () => {
    const response = await server.inject({
      method: 'PUT',
      url: `/todo/${db.todo.length + 12}`,
      body: {},
    });

    expect(response.statusCode).toEqual(404);
  });
});
