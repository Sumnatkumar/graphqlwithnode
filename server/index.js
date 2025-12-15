import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import USERS from "./user.js";
import TODOS from "./todo.js";

async function startServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  const typeDefs = `
    type User {
      id: ID!
      name: String!
      username: String!
      email: String!
      phone: String!
      website: String!
    }

    type Todo {
      id: ID!
      title: String!
      completed: Boolean
      user: User
    }

    type Query {
      getTodos: [Todo]
      getAllUsers: [User]
      getUser(id: ID!): User
    }
  `;

  const resolvers = {
    Todo: {
      user: (todo) => USERS.find((u) => u.id === todo.userId),
    },

    Query: {
      getTodos: () => TODOS,
      getAllUsers: () => USERS,
      getUser: (_, { id }) => USERS.find((u) => u.id === id),
    },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(8000, () => {
    console.log("🚀 Server ready at http://localhost:8000/graphql");
  });
}

startServer();
