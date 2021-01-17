import { ApolloServer } from "apollo-server-express";
import * as cors from "cors";
import config from "./config";
import * as express from "express";
import "reflect-metadata";
import { createSchema } from "./createSchema";

// tslint:disable-next-line


const startServer = async () => {

  const schema = await createSchema();

  const app = express();

  app.use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    }),
  );

  const server = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({
      req,
      res,
    }),
  });

  server.applyMiddleware({
    app,
    path: "/",
    cors: false,
  });

  app.listen({ port: config.port }, () =>
    console.log(`🚀 Server is starting on port ${config.port} ..`)
  );
};

startServer().catch(error => {
  console.error(error);
});