import { knex as setupKnex, Knex } from "knex"; // Add this import statement

export const config: Knex.Config = {
	client: "sqlite",
	connection: {
		filename: "./db/app.db",
	},
	useNullAsDefault: true,
	migrations: {
		extension: "ts",
		directory: "./db/migrations",
	},
};

export const knex = setupKnex(config);
