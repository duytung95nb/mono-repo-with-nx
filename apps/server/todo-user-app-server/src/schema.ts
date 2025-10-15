import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    getUser: User
  }
`;

export const resolvers = {
  Query: {
    getUser: () => {
      // Mock user data
      return {
        id: "1",
        name: "John Doe",
        email: "john.doe@example.com",
      };
    },
  },
};
