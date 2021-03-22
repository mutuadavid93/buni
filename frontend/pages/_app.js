/* eslint-disable import/no-unresolved */
// @apollo/client :: contains virtually all you need to set up Apollo Client.
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apolloClient";
import "../styles/styles.css";
import "../styles/plugins.css";

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
