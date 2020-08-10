import { useEffect } from 'react';
import { useSubscription } from '@apollo/client';

import gameGraphql from '../game';

interface Props {
  gameId: string;
  callback: (data: any) => void; // TODO typing
}
export function GameEventsSubscriber({ gameId, callback }: Props) {
  const { data, loading, error } = useSubscription(
    gameGraphql.queries.SUBSCRIBE_GAME_EVENTS,
    {
      variables: { gameId },
    },
  );

  console.log('GameEvents Subscriber', data, loading, error);

  useEffect(() => {
    if (data) {
      console.log('GameEvents callback data', data);
      callback(data);
    }
  }, [data]);

  return null;
}
