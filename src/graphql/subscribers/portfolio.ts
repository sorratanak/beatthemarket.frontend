import { useEffect } from 'react';
import { useSubscription } from '@apollo/client';

import porfolioGraphql from '../portfolio';
import { IPortfolio } from '../../types';

interface Props {
  gameId: string;
  callback: (portfolio: IPortfolio[]) => void;
}
export function PortfolioSubscriber({ gameId, callback }: Props) {
  const { data } = useSubscription(
    porfolioGraphql.queries.SUBSCRIBE_PORTFOLIO,
    {
      variables: { gameId },
    },
  );

  useEffect(() => {
    if (data) {
      callback(data.portfolioUpdates);
    }
  }, [data]);

  return null;
}
