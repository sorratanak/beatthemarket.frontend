import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Platform } from 'react-native';

import queries from './queries';
import { getToken } from '../utilities';

const ip = Platform.OS === 'android' ? '10.0.2.2' : '127.0.0.1';

export const SERVER_API_URL = `http://${ip}:8080/api`;

const httpLink = createHttpLink({
  uri: SERVER_API_URL,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await getToken();

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const graphqlApi = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const graphqlQueries = {
  ...queries,
};
