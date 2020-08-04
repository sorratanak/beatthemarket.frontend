import React from 'react';
import { View } from 'react-native';

import { IPoint } from '../../types';
import { LineChart } from '..';
import { styles } from './styles';

interface Props {
  chartData: IPoint[];
}
export function GameChartBoard({ chartData }: Props) {
  return (
    <View style={styles.container}>
      <LineChart data={chartData} />
    </View>
  );
}
