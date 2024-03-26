import { afterAll, describe, expect, it } from "vitest";
import { server } from "../src/index";
import { db } from "../src/database";
import { ITodo } from "../src/database/todo";

describe("Update Todo", () => {
	afterAll(async () => {
		await server.close();
	});
	it("should update todo", async () => {
		const updatePayload: Omit<ITodo, "name" | "id"> = {
			description: "new desc",
		};
		const response = await server.inject({
			method: "PUT",
			url: `/todo/${db.todo.length - 1}`,
			body: updatePayload,
		});

		expect(response.statusCode).toEqual(204);
	});

	it("should return 404", async () => {
		const response = await server.inject({
			method: "PUT",
			url: `/todo/${db.todo.length + 12}`,
			body: {},
		});

		expect(response.statusCode).toEqual(404);
	});
});
