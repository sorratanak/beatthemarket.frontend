import { COLORS } from '../../themes/colors';

export const DEFAULT_CHART_OPTIONS = {
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
  series: [
    {
      name: 'Value',
      data: [],
    },
  ],
  xAxis: {
    labels: {
      formatter: function formatter() {
        const minutes = this.value >= 60 ? this.value / 60 : 0;
        const seconds = this.value % 60;
        return `${minutes}:${seconds >= 10 ? seconds : `0${seconds}`}`;
      },
    },
    gridLineWidth: 2,
    min: 0,
    max: 10,
  },
  chart: {
    type: 'line',
  },
};
