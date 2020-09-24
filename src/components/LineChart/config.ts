import { Platform, Dimensions } from 'react-native';
import { COLORS } from '../../themes/colors';
import { ITheme } from '../../themes/interface';

export const getThemedDefaultChartOptions = (theme: ITheme) => ({
  title: {
    text: '',
  },
  plotOptions: {
    line: {
      color: COLORS.BLACK,
      marker: {
        enabled: false,
      },
    },
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      name: 'Value',
      data: [],
    },
  ],
  xAxis: {
    labels: {
      formatter: function formatter() {
        // ! DO NOT use moment here
        const minutes = this.value >= 60 ? Math.floor(this.value / 60) : 0;
        const seconds = this.value % 60;
        return `${minutes}:${seconds >= 10 ? seconds : `0${seconds}`}`;
      },
    },
    lineColor: theme.DEFAULT.TEXT_COLOR,
    // gridLineColor: 'rgba(128,128,128,0.3)',
    // gridLineWidth: 1,
    min: 0,
    max: 10,
    tickColor: theme.DEFAULT.TEXT_COLOR,
  },
  yAxis: {
    tickColor: theme.DEFAULT.TEXT_COLOR,
    lineColor: theme.DEFAULT.TEXT_COLOR,
    lineWidth: 1,
    gridLineColor: 'rgba(128,128,128,0.3)',
    title: {
      text: '',
    },
  },
  legend: {
    enabled: false,
  },
  colorAxis: {
    minorGridLineColor: 'red',
  },
  chart: {
    type: 'line',
    backgroundColor: theme.DEFAULT.SECONDARY_BACKGROUND_COLOR,
    height: Platform.OS === 'web' ? '60%' : undefined,
    width:
      Platform.OS === 'web' ? Dimensions.get('window').width * 0.5 : undefined,
  },
});
