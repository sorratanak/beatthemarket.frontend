import {
  VictoryChart,
  VictoryCandlestick,
  VictoryZoomContainer,
} from 'victory';

const style: { [key: string]: React.CSSProperties } = {
  parent: {
    maxWidth: '70%',
    maxHeight: '80hv',
  },
  // parent: { border: '1px solid #ccc', margin: '2%', maxWidth: '40%' },
};

export { VictoryCandlestick, VictoryChart, VictoryZoomContainer, style };
