import { useEffect } from 'react';
import { useSubscription } from '@apollo/client';

import porfolioGraphql from '../portfolio';

interface Props {
  gameId: string;
  callback: (data: any) => void;
}
export function PortfolioSubscriber({ gameId, callback }: Props) {
  const { data, loading, error } = useSubscription(
    porfolioGraphql.queries.SUBSCRIBE_PORTFOLIO,
    {
      variables: { gameId },
    },
  );

  console.log('Portfolio Subscriber', data, loading, error);

  useEffect(() => {
    if (data) {
      callback(data);
    }
  }, [data]);

  return null;
}
