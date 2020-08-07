import React, {
  useContext,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';

import { IPoint, IStockChange, IUser, IStock } from '../../types';
import { LineChart } from '../LineChart';
import { GameContext, UserContext } from '../../contexts';
import { getThemedStyles } from './styles';
import { getStockChanges } from '../../utils/parsing';
import { StockList } from '../StockList';
import { COLORS } from '../../themes/colors';
import { STOCK_CHANGE_TYPE } from '../../constants';

interface ChartHeaderProps {
  themedStyles: any;
  user: IUser;
  activeStock: IStock;
  data: IPoint[];
}
function ChartHeader({
  themedStyles,
  data,
  activeStock,
  user,
}: ChartHeaderProps) {
  const [prelastItem, lastItem] = useMemo(() => {
    const [prelast, last] = data.slice(-2);
    return !last ? [null, prelast] : [prelast, last];
  }, [data]);

  const [stockChange, setStockChange] = useState<IStockChange>(null);

  useEffect(() => {
    setStockChange(getStockChanges(prelastItem, lastItem));
  }, [prelastItem, lastItem]);

  return (
    <View style={themedStyles.chartHeaderContainer}>
      <View style={themedStyles.chartHeaderSubcontainer}>
        <View style={themedStyles.chartHeaderImageContainer}>
          <Text>Image here</Text>
        </View>
        <Text style={themedStyles.chartHeaderTitle}>{activeStock?.name} </Text>
        <Text style={themedStyles.chartHeaderTitleAbbr}>
          ({activeStock?.symbol})
        </Text>
      </View>
      {stockChange && (
        <View style={themedStyles.chartHeaderSubcontainer}>
          <Text style={themedStyles.chartHeaderStockChangeValue}>
            {stockChange.currentValue && `$ `}
            {stockChange.currentValue?.toFixed(2)}
          </Text>
          <Text
            style={
              stockChange.percent > 0
                ? themedStyles.chartHeaderStockChangePositivePercent
                : themedStyles.chartHeaderStockChangeNegativePercent
            }>
            {stockChange.difference}
            {`    `}({stockChange.percent}%)
          </Text>
        </View>
      )}
      <View style={themedStyles.userBalanceContainer}>
        {/* <Text style={themedStyles.chartHeaderStockChangeValue}>
          $ {user?.userAccounts[0]?.accountBalance}
        </Text> */}
      </View>
    </View>
  );
}

interface ChartFooterProps {
  themedStyles: any;
}
function ChartFooter({ themedStyles }: ChartFooterProps) {
  const SHARED_CHANGE_STEP = 20;
  const SLIDER_MIN_VALUE = 1;
  const SLIDER_MAX_VALUE = 500;

  const [sliderValue, setSliderValue] = useState(SLIDER_MIN_VALUE);

  const onChangeSliderByButton = useCallback(
    (type: string) => {
      if (type === STOCK_CHANGE_TYPE.FALL) {
        if (sliderValue > SHARED_CHANGE_STEP) {
          setSliderValue(sliderValue - SHARED_CHANGE_STEP);
        } else {
          setSliderValue(SLIDER_MIN_VALUE);
        }
      } else if (sliderValue + SHARED_CHANGE_STEP < SLIDER_MAX_VALUE) {
        setSliderValue(sliderValue + SHARED_CHANGE_STEP);
      } else {
        setSliderValue(SLIDER_MAX_VALUE);
      }
    },
    [sliderValue, setSliderValue],
  );

  return (
    <View style={themedStyles.chartFooterContainer}>
      <View style={themedStyles.chartFooterCell}>
        <TouchableOpacity
          onPress={() => onChangeSliderByButton(STOCK_CHANGE_TYPE.FALL)}
          style={themedStyles.chartFooterSliderButtonContainer}>
          <Text style={themedStyles.chartFooterSliderButtonTitle}>-</Text>
        </TouchableOpacity>
        <Slider
          style={themedStyles.chartFooterSliderContainer}
          value={sliderValue}
          onValueChange={setSliderValue}
          minimumValue={SLIDER_MIN_VALUE}
          maximumValue={SLIDER_MAX_VALUE}
          thumbTintColor={COLORS.WHITE}
          minimumTrackTintColor={COLORS.GRAY}
          maximumTrackTintColor={COLORS.GRAY}
        />
        <TouchableOpacity
          onPress={() => onChangeSliderByButton(STOCK_CHANGE_TYPE.RISE)}
          style={themedStyles.chartFooterSliderButtonContainer}>
          <Text style={themedStyles.chartFooterSliderButtonTitle}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={themedStyles.chartFooterCell}>
        <TouchableOpacity
          onPress={() => console.log('on RISE')}
          style={[
            themedStyles.chartFooterButtonContainer,
            themedStyles.chartFooterButtonRise,
          ]}>
          <Text style={themedStyles.chartFooterButtonText}>Rise</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => console.log('on FALL')}
          style={[
            themedStyles.chartFooterButtonContainer,
            themedStyles.chartFooterButtonFall,
          ]}>
          <Text style={themedStyles.chartFooterButtonText}>Fall</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

interface Props {
  stocks: IStock[];
  activeStock: IStock;
  chartData: IPoint[];
}
export function GameChartBoard({ stocks, activeStock, chartData }: Props) {
  const { theme, user } = useContext(UserContext);
  const { onSetActiveStock } = useContext(GameContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.chartArea}>
        <ChartHeader
          activeStock={activeStock}
          themedStyles={themedStyles}
          data={chartData}
          user={user}
        />
        <View style={themedStyles.chartContainer}>
          <LineChart data={chartData} />
        </View>
      </View>
      <View style={themedStyles.infoArea}>
        <ChartFooter themedStyles={themedStyles} />
        <StockList
          data={stocks}
          activeStock={activeStock}
          onItemPress={onSetActiveStock}
        />
      </View>
    </View>
  );
}
