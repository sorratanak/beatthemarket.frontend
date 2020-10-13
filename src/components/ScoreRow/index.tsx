import React, { useContext, useMemo } from 'react';
import { View, Text } from 'react-native';

import { getThemedStyles } from './styles';
import { ThemeContext, UserContext } from '../../contexts';
import { getMoneyFormat } from '../../utils';
import { getGameScore } from '../../utils/parsing';

export function ScoreRow() {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const { userInfo } = useContext(UserContext);

  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.percentContainer}>
        {/* <Text style={themedStyles.percentLabel}>{percent}</Text> */}
      </View>
      {userInfo?.user?.games && (
        <ScoreLabel
          title="Cash + Profit/Loss"
          value={getMoneyFormat(
            getGameScore(userInfo.user.games[userInfo.user.games.length - 1]),
          )}
          themedStyles={themedStyles}
        />
      )}
      {/* <ScoreLabel title="Profit Margin" value={0} themedStyles={themedStyles} /> */}
    </View>
  );
}

interface ScoreLabelProps {
  title: string;
  value: number | string;
  themedStyles: any;
}
function ScoreLabel({ title, value, themedStyles }: ScoreLabelProps) {
  return (
    <View style={themedStyles.scoreLabelContainer}>
      <View style={themedStyles.valueContainer}>
        <Text style={themedStyles.title}>{title}</Text>
        <Text style={themedStyles.label}>{value}</Text>
      </View>
    </View>
  );
}
