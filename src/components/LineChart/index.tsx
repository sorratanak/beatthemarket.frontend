import React, { useState, useEffect, useCallback } from 'react';
import { View } from 'react-native';
import HighchartsContainer from '@highcharts/highcharts-react-native';

import { styles } from './styles';
import { IPoint } from '../../types';

interface Props {
  data: IPoint[];
}

const DEFAULT_CHART_OPTIONS = {
  plotOptions: {
    series: {
      allowPointSelect: false,
      // type: 'line',
    },
    line: {
      allowPointSelect: false,
    },
  },
  series: [
    {
      name: 'Value',
      data: [],
    },
  ],
  xAxis: {
    min: 0,
    max: 10,
  },
  chart: {
    type: 'line',
  },
};
const MAX_POINT_NUMBER = 10;

export function LineChart({ data }: Props) {
  const [chartOptions, setChartOptions] = useState(DEFAULT_CHART_OPTIONS);

  useEffect(() => {
    setChartOptions({
      ...DEFAULT_CHART_OPTIONS,
      series: [{ name: 'Value', data: data.map((el) => el.y) }],
      xAxis: {
        min:
          data.length > MAX_POINT_NUMBER ? data.length - MAX_POINT_NUMBER : 0,
        max: data.length,
      },
    });
  }, [data]);

  return (
    <View pointerEvents="none" style={styles.container}>
      <HighchartsContainer
        useCDN
        useSSL
        loader
        javaScriptEnabled
        domStorageEnabled
        styles={styles.container}
        options={chartOptions}
      />
    </View>
  );
}
