import React from 'react';
import { AppRegistry, Platform } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { graphqlApi } from './graphql';
import RootNavigation from './navigation/rootNavigation';
import MultipleContextProvider from './contexts';
import { STRIPE_PUBLISH_KEY } from './constants';

export const stripePromise = loadStripe(STRIPE_PUBLISH_KEY);

export function App() {
  return (
    <ApolloProvider client={graphqlApi}>
      <Elements stripe={stripePromise}>
        <MultipleContextProvider>
          <RootNavigation />
        </MultipleContextProvider>
      </Elements>
    </ApolloProvider>
  );
}

AppRegistry.registerComponent('BeatTheMarket', () => App);
if (Platform.OS === 'web') {
  AppRegistry.runApplication('BeatTheMarket', {
    rootTag: document.getElementById('root'),
  });
}
