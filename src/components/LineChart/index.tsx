import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';
import pickRandom from 'pick-random';

import { HighchartsContainer } from './helper';
import { styles } from './styles';
import { IPoint } from '../../types';
import { getThemedDefaultChartOptions } from './config';
import { COLORS } from '../../themes/colors';
import { GameContext, ThemeContext } from '../../contexts';

interface Props {
  data: IPoint[];
}

const MAX_VISIBLE_POINTS = 30;

export function LineChart({ data }: Props) {
  const { theme } = useContext(ThemeContext);

  const [chartOptions, setChartOptions] = useState(
    getThemedDefaultChartOptions(theme),
  );
  useEffect(() => {
    const { xAxis, yAxis, chart } = getThemedDefaultChartOptions(theme);

    setChartOptions({
      ...chartOptions,
      xAxis,
      yAxis,
      chart,
    });
  }, [theme]);

  const { activeStock } = useContext(GameContext);

  const [chartColor, setChartColor] = useState(null);

  useEffect(() => {
    setChartColor(
      pickRandom([
        COLORS.BILBAO,
        COLORS.VIKING,
        COLORS.CORNFLOWER_BLUE,
        COLORS.VALENCIA,
        COLORS.MACARONI_AND_CHEESE,
      ])[0],
    );
  }, [activeStock, setChartColor]);

  useEffect(() => {
    setChartOptions({
      ...chartOptions,
      plotOptions: {
        ...chartOptions.plotOptions,
        line: {
          ...chartOptions.plotOptions.line,
          color: chartColor,
        },
      },
      series: [
        {
          name: 'Value',
          data: data.map((el) => el.y),
        },
      ],
      xAxis: {
        ...chartOptions.xAxis,
        min:
          data.length > MAX_VISIBLE_POINTS
            ? data.length - MAX_VISIBLE_POINTS
            : 0,
        max: data.length,
      },
    });
  }, [data]);

  return (
    <View pointerEvents="none" style={styles.mainContainer}>
      <HighchartsContainer
        useCDN
        useSSL
        loader
        javaScriptEnabled
        domStorageEnabled
        styles={styles.chartContainer}
        options={chartOptions}
      />
    </View>
  );
}
