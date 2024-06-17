import { config } from "dotenv";
import { z } from "zod";

if (process.env.NODE_ENV === "test") {
	config({ path: ".env.test" });
} else {
	config();
}

const envSchema = z.object({
	NODE_ENV: z
		.enum(["test", "production", "development"])
		.default("development"),
	DATABASE_URL: z.string(),
	PORT: z.string().default("3333"),
});

const _env = envSchema.safeParse(process.env);

if (!_env.success) {
	console.error("Environment validation failed", _env.error.format());

	throw new Error(_env.error.message);
}

export const env = _env.data;
