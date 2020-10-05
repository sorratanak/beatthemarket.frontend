import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  ApolloLink,
  split,
} from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from '@apollo/client/link/ws';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import { getFirebaseToken, getUuidFromStorage } from '../utils/storage';
// import { isAndroid } from '../utils';
import { SERVER_BASE_IP, SERVER_PORT } from '../constants';

// const ip = isAndroid ? '10.0.2.2' : '127.0.0.1';

// export const SERVER_API_URL = `http://${ip}:5000/api`;
// export const SERVER_WS_URL = `ws://${ip}:5000/ws`;

export const SERVER_API_URL = `https://${SERVER_BASE_IP}:${SERVER_PORT}/api`;
export const SERVER_WS_URL = `wss://${SERVER_BASE_IP}:${SERVER_PORT}/ws`;

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
      const deviceId = await getUuidFromStorage();
      return {
        'cliend-id': deviceId,
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
  const deviceId = await getUuidFromStorage();

  return {
    headers: {
      ...headers,
      'client-id': deviceId,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const graphqlApi = new ApolloClient({
  link: ApolloLink.from([authLink, errorLink, splitLink]),
  cache: new InMemoryCache(),
  defaultOptions: {
    mutate: { errorPolicy: 'ignore' },
  },
});
