import React, { useContext, useEffect, useState, useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import moment from 'moment';

import { ThemeContext, UserContext, GameContext } from '../../contexts';
import { getThemedStyles } from './styles';
import { GameTimer } from '../GameTimer';

const EMPTY_TIMER = '00:00:00';

interface Props {
  style?: {
    container?: ViewStyle;
    username?: TextStyle;
  };
}

export function GameHeader({ style: propStyle = {} }: Props) {
  const {
    user: { userName },
  } = useContext(UserContext);
  const {
    gameEvents,
    gameId,
    isGamePaused,
    onResumeGame,
    onPauseGame,
  } = useContext(GameContext);

  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const [timeRemaining, setTimeRemaining] = useState<string>(EMPTY_TIMER);

  useEffect(() => {
    setTimeRemaining(
      moment()
        .hours(0)
        .minutes(gameEvents?.minutesRemaining || 0)
        .seconds(gameEvents?.secondsRemaining || 0)
        .format('HH:mm:ss'),
    );
  }, [gameEvents?.minutesRemaining, gameEvents?.secondsRemaining]);

  return (
    <View style={[themedStyles.container, propStyle.container]}>
      <View style={themedStyles.cellContainer}>
        <Text style={[themedStyles.username, propStyle.username]}>
          {userName}
        </Text>
      </View>
      <View style={themedStyles.cellContainer}>
        {timeRemaining !== EMPTY_TIMER && <GameTimer time={timeRemaining} />}
      </View>
      <View style={themedStyles.cellContainer}>
        {gameId && (
          // TODO temporary solution
          <TouchableOpacity onPress={isGamePaused ? onResumeGame : onPauseGame}>
            <Text style={themedStyles.pauseText}>
              {isGamePaused ? 'Resume' : 'Pause'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
