import React, { useState } from 'react';
import { View } from 'react-native';
import HighchartsReactNative from '@highcharts/highcharts-react-native';
import { Constants } from 'react-native-unimodules';

import { styles } from './styles';
import { IPoint } from '../../types';

console.log('Constants: ', Constants.systemFonts);

const DEFAULT_CHART_OPTIONS = {
  series: [
    {
      name: 'Speed',
      data: [1, 10, 3],
    },
  ],
  chart: {
    type: 'line',
  },
};

interface Props {
  data: IPoint[];
}

export function LineChart({ data }: Props) {
  const [chartOptions, setChartOptions] = useState(DEFAULT_CHART_OPTIONS);

  return (
    <View style={styles.container}>
      <HighchartsReactNative
        useCDN
        useSSL
        loader
        styles={styles.container}
        options={chartOptions}
      />
    </View>
  );
}
