import { knex as setupKnex, Knex } from "knex";
import { env } from "./env"; // Add this import statement

export const config: Knex.Config = {
	client: "sqlite",
	connection: {
		filename: env.DATABASE_URL || "./db/app.db",
	},
	useNullAsDefault: true,
	migrations: {
		extension: "ts",
		directory: "./db/migrations",
	},
};

export const knex = setupKnex(config);
