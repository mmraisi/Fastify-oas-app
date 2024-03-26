import { expect, it, describe, afterAll } from "vitest";
import { server } from "../src/index";
import { db } from "../src/database";

describe("GET all todos", () => {
	afterAll(async () => {
		await server.close();
	});
	it("GET all todos", async () => {
		const response = await server.inject({
			method: "GET",
			url: "/todos",
		});

		expect(response.statusCode).toEqual(200);
		expect(JSON.parse(response.body)).toEqual(db.todo);
	});
});
