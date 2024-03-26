import { defineConfig } from "vitest/config";

export default defineConfig({
	root: ".",
	test: {
		coverage: {
			provider: "v8",
			include: ["src"],
		},
		setupFiles: ["dotenv/config"],
	},
});
