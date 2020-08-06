import React, { useContext, useMemo } from 'react';
import { View, Text } from 'react-native';

import { IPoint } from '../../types';
import { LineChart } from '../LineChart';
import { getThemedStyles } from './styles';
import { UserContext } from '../../userContext';

interface ChartHeaderProps {
  themedStyles: any;
  data: IPoint[];
}
function ChartHeader({ themedStyles, data }: ChartHeaderProps) {
  const [prelastItem, lastItem] = useMemo(() => {
    const [prelast, last] = data.slice(-2);
    return !last ? [null, prelast] : [prelast, last];
  }, [data]);

  return (
    <View style={themedStyles.chartHeaderContainer}>
      <View style={themedStyles.chartHeaderSubcontainer}>
        <View style={themedStyles.chartHeaderImageContainer}>
          <Text>Image here</Text>
        </View>
        <Text style={themedStyles.chartHeaderTitle}>Tesla</Text>
        <Text style={themedStyles.chartHeaderTitleAbbr}>(TSLA)</Text>
      </View>
      <Text>
        {prelastItem?.x} {prelastItem?.y}
        {'   '}
      </Text>
      <Text>
        {lastItem?.x} {lastItem?.y}
      </Text>
    </View>
  );
}

interface Props {
  chartData: IPoint[];
}
export function GameChartBoard({ chartData }: Props) {
  const { theme } = useContext(UserContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.chartArea}>
        <ChartHeader themedStyles={themedStyles} data={chartData} />
        <View style={themedStyles.chartContainer}>
          <LineChart data={chartData} />
        </View>
      </View>
      <View style={themedStyles.infoArea}>
        <Text>Info area</Text>
      </View>
    </View>
  );
}
