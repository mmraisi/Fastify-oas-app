import { describe, expect, it, afterAll } from "vitest";
import { server } from "../src/index";
import { db } from "../src/database";
import { ITodo } from "../src/database/todo";

describe("GET todoById tests", () => {
	afterAll(async () => {
		await server.close();
	});
	it("Should get todo by id", async () => {
		const response = await server.inject({
			method: "GET",
			url: `/todo/${db.todo.length - 1}`,
		});

		expect(response.statusCode).toEqual(200);

		const body: ITodo = JSON.parse(response.body);
		expect(body).toEqual(db.todo.find((item) => item.id === body?.id));
	});

	it("should return empty object", async () => {
		const response = await server.inject({
			method: "GET",
			url: `/todo/${db.todo.length + 12}`,
		});
		expect(response.statusCode).toEqual(404);
	});
});
