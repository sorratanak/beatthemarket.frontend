import React from 'react';
import { AppRegistry } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import { graphqlApi } from './graphql';
import RootNavigation from './navigation/rootNavigation';
import MultipleContextProvider from './contexts';
import CONFIG from './config';
import { isWeb } from './utils';

export const stripePromise = loadStripe(CONFIG.STRIPE_PUBLISH_KEY);

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
if (isWeb) {
  AppRegistry.runApplication('BeatTheMarket', {
    rootTag: document.getElementById('root'),
  });
}
