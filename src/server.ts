import { env } from "./env";
import { app } from "./app";

app.listen({ port: Number(env.PORT) }).then(() => {
	console.log(`Server is running on http://localhost:${env.PORT}`);
});
