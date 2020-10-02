import React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloProvider } from '@apollo/client';

import { graphqlApi } from './graphql';
import RootNavigation from './navigation/rootNavigation';
import MultipleContextProvider from './contexts';
import { isWeb } from './utils';

export const stripePromise = null;

export function App() {
  return (
    <ApolloProvider client={graphqlApi}>
      <MultipleContextProvider>
        <RootNavigation />
      </MultipleContextProvider>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent('BeatTheMarket', () => App);
if (isWeb) {
  AppRegistry.runApplication('BeatTheMarket', {
    rootTag: document.getElementById('root'),
  });
}
