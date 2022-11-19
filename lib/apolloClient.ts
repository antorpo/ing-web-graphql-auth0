import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const clientGraph = new ApolloClient({
  uri: process.env.SERVER_URL ?? "https://ing-web-graphql-auth0.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

