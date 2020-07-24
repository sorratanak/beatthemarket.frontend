import React from 'react';
import { AppRegistry, Platform } from 'react-native';
import RootNavigation from './navigation/rootNavigation';
import UserContextProvider from './userContext';

export function App() {
  return (
    <UserContextProvider>
      <RootNavigation />
    </UserContextProvider>
  );
}

AppRegistry.registerComponent('example', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('example', {
    rootTag: document.getElementById('root'),
  });
}
