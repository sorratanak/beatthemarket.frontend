import { useEffect } from 'react';
import { useSubscription } from '@apollo/client';

import porfolioGraphql from '../portfolio';
import { IPortfolio } from '../../types';

interface Props {
  gameId: string;
  callback: (portfolio: IPortfolio) => void;
}
export function PortfolioSubscriber({ gameId, callback }: Props) {
  const { data, loading, error } = useSubscription(
    porfolioGraphql.queries.SUBSCRIBE_PORTFOLIO,
    {
      variables: { gameId },
    },
  );

  useEffect(() => {
    if (data) {
      callback(data.portfolioUpdates[0]);
    }
  }, [data]);

  return null;
}
