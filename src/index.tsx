import React from 'react';
import { AppRegistry, Platform } from 'react-native';
import { ApolloProvider } from '@apollo/client';

import { graphqlApi } from './graphql';
import RootNavigation from './navigation/rootNavigation';
import MultipleContextProvider from './contexts';

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
if (Platform.OS === 'web') {
  AppRegistry.runApplication('BeatTheMarket', {
    rootTag: document.getElementById('root'),
  });
}
