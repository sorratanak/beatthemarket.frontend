import {
  VictoryChart,
  VictoryLine,
  VictoryAxis,
  VictoryScatter,
  VictoryZoomContainer,
} from 'victory-native';

// https://formidable.com/open-source/victory/guides/custom-charts
const style: { [key: string]: React.CSSProperties } = {
  parent: {
    margin: 0,
    padding: 0,
  },
  data: {
    margin: 0,
    padding: 0,
  },
};

export {
  VictoryLine,
  VictoryAxis,
  VictoryScatter,
  VictoryChart,
  VictoryZoomContainer,
  style,
};
