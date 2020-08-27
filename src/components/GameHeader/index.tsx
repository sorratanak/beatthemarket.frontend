import React, {
  useContext,
  useCallback,
  useEffect,
  useState,
  useMemo,
} from 'react';
import { View, Text, ViewStyle, TextStyle } from 'react-native';
import randomString from 'random-string';
import moment from 'moment';
import _ from 'lodash';

import { ThemeContext, UserContext, GameContext } from '../../contexts';
import { getThemedStyles } from './styles';
import { isNumericChar } from '../../utils';

const EMPTY_TIMER = '00:00:00';

interface GameHeaderTimerProps {
  time: string;
  themedStyles: any;
}

export function GameHeaderTimer({ time, themedStyles }: GameHeaderTimerProps) {
  const renderNumberCell = useCallback(
    (num) => (
      <View
        key={`number-cell-${num}-${randomString()}`}
        style={themedStyles.numberCellContainer}>
        <Text style={themedStyles.numberCellValue}>{num}</Text>
      </View>
    ),
    [],
  );

  return (
    <View style={themedStyles.timerContainer}>
      {_.map(time, (timeChar) =>
        isNumericChar(timeChar) ? (
          renderNumberCell(timeChar)
        ) : (
          <Text style={themedStyles.colonValue}>{timeChar}</Text>
        ),
      )}
    </View>
  );
}

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
  const { gameEvents } = useContext(GameContext);

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
        {timeRemaining !== EMPTY_TIMER && (
          <GameHeaderTimer time={timeRemaining} themedStyles={themedStyles} />
        )}
      </View>
      <View style={themedStyles.cellContainer} />
    </View>
  );
}
