import { ApolloClient, InMemoryCache } from '@apollo/client';
import loginQueries from './loginQueries';

export const SERVER_API_URL = 'https://48p1r2roz4.sse.codesandbox.io';

export const graphqlApi = new ApolloClient({
  uri: SERVER_API_URL,
  cache: new InMemoryCache(),
});

export const graphqlQueries = {
  ...loginQueries,
};