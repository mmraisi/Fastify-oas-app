import { describe, expect, test } from 'vitest';
import server from '../src/server';
import { db } from '../src/database';
import { ITodo } from '../src/database/todo';

describe('GET todoById tests', () => {
  test('Should get todo by id', async () => {
    const response = await server.inject({
      method: 'GET',
      url: `/todo/${db.todo.length - 1}`,
    });

    expect(response.statusCode).toEqual(200);

    const body: ITodo = JSON.parse(response.body);
    expect(body).toEqual(db.todo.find((item) => item.id === body?.id));
  });

  test('should return empty object', async () => {
    const response = await server.inject({
      method: 'GET',
      url: `/todo/${db.todo.length + 12}`,
    });
    expect(response.statusCode).toEqual(404);
  });
});
