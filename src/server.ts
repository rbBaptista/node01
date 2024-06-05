import fastify from "fastify";
import { knex } from "./db";
import { env } from "./env";

const app = fastify();

app.get("/hello", async (request, reply) => {
	return knex("transactions").select("*");
});

app.listen({ port: Number(env.PORT) }).then(() => {
	console.log(`Server is running on http://localhost:${env.PORT}`);
});
