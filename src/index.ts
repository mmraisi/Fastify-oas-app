import dotenv from "dotenv";
dotenv.config();

import fastify, { FastifyInstance } from "fastify";
import oas from "oas-fastify";
import fastifySwagger from "@fastify/swagger";
import { todoController as handler } from "./controllers/todos/index";

import spec from "./openapi.json";

//workaround for fastify issue (https://github.com/ahmadnassri/node-oas-fastify/issues/17)
(spec as { $id?: string }).$id = "$";

const PORT = process.env.PORT ?? 8080;

export let server: FastifyInstance;

export const start = async () => {
	server = fastify({
		ajv: {
			customOptions: {
				strict: false,
			},
		},
	});

	server.register(fastifySwagger, {
		swagger: spec,
		exposeRoute: true,
		routePrefix: "/docs",
		uiConfig: {
			docExpansion: "list",
		},
	});

	server.get("/", (_, reply) => {
		reply.send("Ok!");
	});

	// Integrate oas-fastify
	server.register(oas, {
		spec,
		handler,
	});

	await server.listen({ port: PORT as number, host: "0.0.0.0" });
	console.log("app is listening on port:", PORT);

	return server;
};

start();
