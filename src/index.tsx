import React from 'react';
import { AppRegistry, Platform } from 'react-native';
import { ApolloProvider } from '@apollo/client';

import { graphqlApi } from './graphql';
import RootNavigation from './navigation/rootNavigation';
import UserContextProvider from './userContext';

export function App() {
  return (
    <UserContextProvider>
      <ApolloProvider client={graphqlApi}>
        <RootNavigation />
      </ApolloProvider>
    </UserContextProvider>
  );
}

AppRegistry.registerComponent('example', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('example', {
    rootTag: document.getElementById('root'),
  });
}
