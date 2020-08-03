import React from 'react';
import { View } from 'react-native';
import { useSubscription } from '@apollo/client';

import gameGraphql from '../../graphql/game';
import { styles } from './styles';
// import { IStockTick } from '../../types';

interface Props {
  gameId: string;
  testID?: string;
}

export function StockTicksList({ gameId, testID }: Props) {
  const { loading, data, error } = useSubscription(
    gameGraphql.queries.SUBSCRIBE_STOCK_TICKS,
    {
      variables: { gameId },
    },
  );

  console.log('SUBSCRIPTION, gameId is', gameId);
  console.log('loading, data, error', loading, data, error);

  return <View style={styles.container} testID={testID} />;
}