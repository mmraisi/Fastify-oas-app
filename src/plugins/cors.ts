import cors, { FastifyCorsOptions, FastifyCorsOptionsDelegate } from "@fastify/cors";
import { FastifyInstance } from "fastify";

export default async function plugin(
	fastify: {
		register: (
			arg0: (
				instance: FastifyInstance,
				opts: FastifyCorsOptions | FastifyCorsOptionsDelegate,
				done: (err?: Error | undefined) => void
			) => void,
			arg1: { origin: boolean; credentials: boolean } | { origin: never[]; credentials?: undefined }
		) => void;
	},
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	opts: FastifyCorsOptions
) {
	const corsOptions = {
		origin: true,
		credentials: true,
	};
	fastify.register(cors, corsOptions);
}
