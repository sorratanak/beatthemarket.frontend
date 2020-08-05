import { useEffect } from 'react';
import { useSubscription } from '@apollo/client';

import gameGraphql from '../game';
import { IStockTick } from '../../types';

interface Props {
  gameId: string;
  callback: (data: IStockTick[]) => void;
}
export function StockTicksSubscriber({ gameId, callback }: Props) {
  const { data } = useSubscription(gameGraphql.queries.SUBSCRIBE_STOCK_TICKS, {
    variables: { gameId },
  });

  useEffect(() => {
    if (data) {
      callback(data.stockTicks);
    }
  }, [data]);

  return null;
}
