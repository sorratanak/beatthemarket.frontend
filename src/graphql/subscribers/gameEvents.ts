import { useEffect } from 'react';
import { useSubscription } from '@apollo/client';

import gameGraphql from '../game';
import { GAME_EVENT_TYPENAMES } from '../../constants';

interface Props {
  gameId: string;
  levelTimerCallback: (data: any) => void; // TODO typing
  levelStatusCallback: (data: any) => void; // TODO typing
  exitCallback?: () => void;
}
export function GameEventsSubscriber({
  gameId,
  levelTimerCallback,
  levelStatusCallback,
  exitCallback,
}: Props) {
  const { data, loading, error } = useSubscription(
    gameGraphql.queries.SUBSCRIBE_GAME_EVENTS,
    {
      variables: { gameId },
    },
  );

  useEffect(() => {
    console.log('data is', data);
    if (data) {
      switch (data?.gameEvents?.__typename) {
        default:
        case GAME_EVENT_TYPENAMES.LEVEL_TIMER:
          levelTimerCallback(data.gameEvents);
          break;
        case GAME_EVENT_TYPENAMES.LEVEL_STATUS:
          levelStatusCallback(data.gameEvents);
          break;
        case GAME_EVENT_TYPENAMES.CONTROL_EVENT:
          if (data.gameEvents.event === 'exit' && exitCallback) {
            exitCallback();
          }
          break;
      }
    }
  }, [data]);

  return null;
}
