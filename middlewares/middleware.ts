import { FastifyRequest, FastifyReply } from "fastify";
import fastifyMiddie from "@fastify/middie";
import fastifyCors from "@fastify/cors";
import app from "../configs/fastify";

const middleware = async () => {
  const apiKey = process.env.API_KEY; // Retrieve the API key from environment variable
  await app.register(fastifyMiddie, {
    hook: "onRequest", // default
  });

  // do you know we also have cors support?
  // https://github.com/fastify/fastify-cors
  await app.register(fastifyCors, {
    origin: "*", // Replace with your desired domain
  });
  // Use the API key in your API requests
  app.addHook("onRequest", async (req: FastifyRequest, res: FastifyReply) => {
    const { config, method } = req.routeOptions;

    const { apikey } = req.params as any;
    if (apikey !== apiKey) {
      res.status(401).send({ message: "Unauthorized" });
    }
  });
  return app;
};

export default middleware;
