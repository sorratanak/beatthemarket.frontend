import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { ScoreRow } from '../ScoreRow';
import { IScore } from '../../types';

interface Props extends IScore {}

export function MyScore({ percent, deposit, rate }: Props) {
  return (
    <View style={styles.container}>
      <ScoreRow percent={percent} deposit={deposit} rate={rate} />
    </View>
  );
}
