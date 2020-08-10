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

AppRegistry.registerComponent('example', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('example', {
    rootTag: document.getElementById('root'),
  });
}
