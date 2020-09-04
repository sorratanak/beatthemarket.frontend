import React, { useContext, useMemo } from 'react';
import { View, Text } from 'react-native';

import { getThemedStyles } from './styles';
import { IScore } from '../../types';
import { ThemeContext } from '../../contexts';

interface Props extends IScore {}

export function ScoreRow({ percent, deposit, rate }: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.percentContainer}>
        <Text style={themedStyles.percentLabel}>{percent}</Text>
      </View>
      <ScoreLabel
        title="Cash + Stock"
        value={deposit}
        themedStyles={themedStyles}
      />
      <ScoreLabel
        title="Profit Margin"
        value={rate}
        themedStyles={themedStyles}
      />
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
