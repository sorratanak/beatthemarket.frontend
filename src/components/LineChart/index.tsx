import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import HighchartsReactNative from '@highcharts/highcharts-react-native';

import { styles } from './styles';
import { IPoint } from '../../types';

const DEFAULT_CHART_OPTIONS = {
  series: [
    {
      name: 'Value',
      data: [1, 10, 3],
    },
  ],
  chart: {
    type: 'line',
    description: '',
  },
};

interface Props {
  data: IPoint[];
}

export function LineChart({ data }: Props) {
  const [chartOptions, setChartOptions] = useState(DEFAULT_CHART_OPTIONS);

  useEffect(() => {
    setChartOptions({
      ...DEFAULT_CHART_OPTIONS,
      series: [{ name: 'Value', data: data.map((el) => el.y) }],
    });
  }, [data]);

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
