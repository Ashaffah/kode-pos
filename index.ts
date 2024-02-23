import { FastifyRequest, FastifyReply } from "fastify";
import app from "./configs/fastify";
import { cmdSeeder } from "./helper/auto_seed";
import middleware from "./middlewares/middleware";
import v1ApiRoutes from "./routes/v1";

// Manual Seed the database
// cmdSeeder("./helper/CSV/postal_code.csv");

// Register the middleware
middleware();

// Register the API routes
v1ApiRoutes();

app.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
