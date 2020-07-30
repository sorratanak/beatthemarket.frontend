import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { IScore } from '../../types';

interface Props extends IScore {}

export function ScoreRow({ percent, deposit, rate }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.scoreLabelContainer}>
        <Text style={styles.label}>{percent}</Text>
      </View>
      <ScoreLabel title="Deposit" value={deposit} />
      <ScoreLabel title="Rate" value={rate} />
    </View>
  );
}

interface ScoreLabelProps {
  title: string;
  value: number | string;
}
function ScoreLabel({ title, value }: ScoreLabelProps) {
  return (
    <View style={styles.scoreLabelContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.label}>{value}</Text>
    </View>
  );
}
