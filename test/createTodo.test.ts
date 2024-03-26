import { describe, it, assert, afterAll } from "vitest";
import { db } from "../src/database";
import { ITodo } from "../src/database/todo";
import { server } from "../src/index";

describe("Create Todo", () => {
	afterAll(async () => {
		await server.close();
	});
	it("Should create todo", async () => {
		const newTodo: Omit<ITodo, "id"> = {
			name: "test_1",
			description: "some desc",
		};

		const response = await server.inject({
			method: "POST",
			url: "/todo",
			body: newTodo,
		});

		assert.deepStrictEqual(response.statusCode, 201);
		assert.deepStrictEqual(JSON.parse(response.body)?.name, newTodo.name);
		assert.deepStrictEqual(JSON.parse(response.body)?.description, newTodo.description);
		assert.deepStrictEqual(JSON.parse(response.body)?.id, db.todo.length);
	});
});
