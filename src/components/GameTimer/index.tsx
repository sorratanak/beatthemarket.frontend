import React, { useCallback, useContext, useMemo } from 'react';
import { View, Text } from 'react-native';
import randomString from 'random-string';
import _ from 'lodash';

import { isNumericChar } from '../../utils';
import { ThemeContext } from '../../contexts';
import { getThemedStyles } from './styles';

interface GameTimerProps {
  time: string;
}

export function GameTimer({ time }: GameTimerProps) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const renderNumberCell = useCallback(
    (num) => (
      <View
        key={`number-cell-${num}-${randomString()}`}
        style={themedStyles.numberCellContainer}>
        <Text style={themedStyles.numberCellValue}>{num}</Text>
      </View>
    ),
    [themedStyles],
  );

  return (
    <View style={themedStyles.timerContainer}>
      {_.map(time, (timeChar) =>
        isNumericChar(timeChar) ? (
          renderNumberCell(timeChar)
        ) : (
          <Text
            key={`number-cell-:-${randomString()}`}
            style={themedStyles.colonValue}>
            {timeChar}
          </Text>
        ),
      )}
    </View>
  );
}
