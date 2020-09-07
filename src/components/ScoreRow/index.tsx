import React, { useContext, useMemo } from 'react';
import { View, Text } from 'react-native';
import _ from 'lodash';

import { getThemedStyles } from './styles';
import { ThemeContext, PortfolioContext } from '../../contexts';
import { getMoneyFormat } from '../../utils';

export function ScoreRow() {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const { balance } = useContext(PortfolioContext);

  const summBalance = useMemo(() => {
    return _.reduce(
      Object.values(balance),
      (summ, someBalance) => summ + someBalance.balance,
      0,
    );
  }, [balance]);

  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.percentContainer}>
        {/* <Text style={themedStyles.percentLabel}>{percent}</Text> */}
      </View>
      {summBalance !== 0 && (
        <ScoreLabel
          title="Cash + Stock"
          value={getMoneyFormat(summBalance)}
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
