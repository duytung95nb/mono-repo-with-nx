/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from "express";
import { ApolloServer } from "apollo-server-express";
import * as path from "path";
import { typeDefs, resolvers } from "./schema";

const app = express();

app.use("/assets", express.static(path.join(__dirname, "assets")));

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

// Start Apollo Server
async function startServer() {
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.get("/api", (req, res) => {
    res.send({ message: "Welcome to todo-user-app-server!" });
  });

  const port = process.env.PORT || 3333;
  app.listen(port, () => {
    console.log(`Server ready at http://localhost:${port}/api`);
    console.log(`GraphQL endpoint: http://localhost:${port}/graphql`);
  });
}

startServer().catch((error) => {
  console.error("Error starting server:", error);
});
