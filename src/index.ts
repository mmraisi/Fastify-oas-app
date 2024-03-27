import dotenv from "dotenv";
dotenv.config();

import { join } from "node:path";
import fastify, { FastifyInstance } from "fastify";
import oas from "oas-fastify";
import autoload from "@fastify/autoload";
import { todoController as handler } from "./controllers/todos/index";

/*
	The openapi.json will be generated using make schema or & run commands
*/
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import spec from "./openapi.json";

//workaround for fastify issue (https://github.com/ahmadnassri/node-oas-fastify/issues/17)
(spec as { $id?: string }).$id = "$";

const PORT = process.env.PORT ?? 8080;

export let server: FastifyInstance;

export const start = async () => {
	// fastify default options
	const opts = {
		db: {},
		logger: {},
		server: {
			keepAliveTimeout: 5000,
			mode: "dev",
			ignoreTrailingSlash: false,
		},
		featureFlags: {},
		ajv: {
			customOptions: {
				strict: false,
			},
		},
	};
	server = fastify({
		...opts,
	});

	// add plugins
	server.register(autoload, {
		dir: join(__dirname, "plugins"),
		encapsulate: false,
		options: opts,
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
