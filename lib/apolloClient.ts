import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const clientGraph = new ApolloClient({
  uri: process.env.SERVER_URL ?? "http://localhost:3000/api/graphql",
  cache: new InMemoryCache(),
});

