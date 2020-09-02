import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloLink,
  split,
} from '@apollo/client';
import { Platform } from 'react-native';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import { getFirebaseToken } from '../utils/storage';
// import {
//   DEVELOPMENT_SERVER_BASE_IP,
//   DEVELOPMENT_SERVER_PORT,
// } from '../constants';

const ip = Platform.OS === 'android' ? '10.0.2.2' : '127.0.0.1';

export const SERVER_API_URL = `http://${ip}:8080/api`;
export const SERVER_WS_URL = `ws://${ip}:8080/ws`;

// export const SERVER_API_URL = `http://${DEVELOPMENT_SERVER_BASE_IP}:${DEVELOPMENT_SERVER_PORT}/api`;
// export const SERVER_WS_URL = `ws://${DEVELOPMENT_SERVER_BASE_IP}:${DEVELOPMENT_SERVER_PORT}/ws`;

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log('[GraphQL error]:', message, locations, path),
    );

  if (networkError) console.log('[Network error]', networkError);
});

const httpLink = createHttpLink({
  uri: SERVER_API_URL,
});

const wsLink = new WebSocketLink({
  uri: SERVER_WS_URL,
  options: {
    lazy: true,
    connectionParams: async () => {
      const token = await getFirebaseToken();
      // TO DO send a device id -> client-id
      return {
        token: token ? `Bearer ${token}` : '',
      };
    },
  },
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const authLink = setContext(async (_, { headers }) => {
  const token = await getFirebaseToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const graphqlApi = new ApolloClient({
  link: ApolloLink.from([authLink, errorLink, splitLink]),
  cache: new InMemoryCache(),
});
