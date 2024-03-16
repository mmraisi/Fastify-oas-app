import { expect, test, describe } from 'vitest';
import server from '../src/server';
import { db } from '../src/database';

describe('GET all todos', () => {
  test('GET all todos', async () => {
    const response = await server.inject({
      method: 'GET',
      url: '/todos',
    });

    expect(response.statusCode).toEqual(200);
    expect(JSON.parse(response.body)).toEqual(db.todo);
  });
});
