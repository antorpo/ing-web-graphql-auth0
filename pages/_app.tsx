import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { clientGraph } from "../lib/apolloClient";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <ApolloProvider client={clientGraph}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ApolloProvider>
  );
}

export default MyApp;
