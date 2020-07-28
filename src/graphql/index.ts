import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import queries from './queries';
import { getToken } from '../utilities';

export const SERVER_API_URL = 'http://127.0.0.1:8080/api';

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
