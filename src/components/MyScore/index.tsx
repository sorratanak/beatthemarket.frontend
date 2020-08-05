import React from 'react';
import { View } from 'react-native';

import { ScoreRow } from '../ScoreRow';
import { ScoreList } from '../ScoreList';
import { styles } from './styles';
import { IScore } from '../../types';
import { DUMMY_DATA } from './dummy';

interface Props extends IScore {}

export function MyScore({ percent, deposit, rate }: Props) {
  return (
    <View style={styles.container}>
      <ScoreRow percent={percent} deposit={deposit} rate={rate} />
      <ScoreList data={DUMMY_DATA} />
    </View>
  );
}
