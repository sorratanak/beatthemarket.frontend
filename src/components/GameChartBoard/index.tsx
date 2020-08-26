import React, {
  useContext,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Slider from '@react-native-community/slider';
import _ from 'lodash';

import { IPoint, IStockChange, IStock } from '../../types';
import { LineChart } from '../LineChart';
import { GameContext, ThemeContext, PortfolioContext } from '../../contexts';
import { getThemedStyles } from './styles';
import { getStockChanges, getLastAndPrelast } from '../../utils/parsing';
import { StockList } from '../StockList';
import { COLORS } from '../../themes/colors';
import { STOCK_CHANGE_TYPE, ACCOUNT_BALANCE_TYPE } from '../../constants';
import { DefaultModal } from '../DefaultModal';
import { ExpandedStockList } from '../ExpandedStockList';
import { styles } from '../Container/styles';

interface ChartHeaderProps {
  themedStyles: any;
  data: IPoint[];
}
function ChartHeader({ themedStyles, data }: ChartHeaderProps) {
  // const { user } = useContext(UserContext);
  const { profit, balance } = useContext(PortfolioContext);
  const { activeStock } = useContext(GameContext);

  const activeProfit = useMemo(() => profit[activeStock?.id], [
    profit,
    activeStock,
  ]);
  const activeBalance = useMemo(
    () =>
      _.find(
        Object.values(balance),
        (someBalance) => someBalance.name === ACCOUNT_BALANCE_TYPE.CASH,
      ),
    [balance],
  );

  const [prelastItem, lastItem] = useMemo(() => getLastAndPrelast(data), [
    data,
  ]);

  const [stockChange, setStockChange] = useState<IStockChange>(null);

  useEffect(() => {
    setStockChange(getStockChanges(prelastItem, lastItem));
  }, [prelastItem, lastItem]);

  return (
    <View style={themedStyles.chartHeaderContainer}>
      <Text style={themedStyles.chartHeaderTitleAbbr}>
        {activeStock?.symbol}
      </Text>
      {stockChange && (
        <View style={themedStyles.chartHeaderSubcontainer}>
          <Text style={themedStyles.chartHeaderStockProfitLoss}>
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
          </Text>
        </View>
      )}
      <View style={themedStyles.userBalanceContainer}>
        <Text style={themedStyles.chartHeaderStockProfitLoss}>
          $ {activeProfit?.profitLoss?.toFixed(2) || 0}
        </Text>
        <Text style={themedStyles.chartHeaderCashBalance}>
          $ {activeBalance?.balance?.toFixed(2) || 0}
        </Text>
      </View>
    </View>
  );
}

interface ChartFooterProps {
  themedStyles: any;
}
function ChartFooter({ themedStyles }: ChartFooterProps) {
  const { onBuyStock, onSellStock } = useContext(GameContext);

  const SHARES_CHANGE_STEP = 20;
  const SLIDER_MIN_VALUE = 1;
  const SLIDER_MAX_VALUE = 500;

  const [sliderValue, setSliderValue] = useState(SLIDER_MIN_VALUE);

  const onChangeSliderByButton = useCallback(
    (type: string) => {
      if (type === STOCK_CHANGE_TYPE.SELL) {
        if (sliderValue > SHARES_CHANGE_STEP) {
          setSliderValue(sliderValue - SHARES_CHANGE_STEP);
        } else {
          setSliderValue(SLIDER_MIN_VALUE);
        }
      } else if (sliderValue + SHARES_CHANGE_STEP < SLIDER_MAX_VALUE) {
        setSliderValue(sliderValue + SHARES_CHANGE_STEP);
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
          onPress={() => onChangeSliderByButton(STOCK_CHANGE_TYPE.SELL)}
          style={[
            themedStyles.chartFooterSliderButtonContainer,
            themedStyles.ml16,
          ]}>
          <Text style={themedStyles.chartFooterSliderButtonTitle}>-</Text>
        </TouchableOpacity>
        <View style={themedStyles.chartFooterSliderArea}>
          <Text style={themedStyles.chartFooterSharesTitle}>
            {Math.round(sliderValue)} shares
          </Text>
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
        </View>
        <TouchableOpacity
          onPress={() => onChangeSliderByButton(STOCK_CHANGE_TYPE.BUY)}
          style={[
            themedStyles.chartFooterSliderButtonContainer,
            themedStyles.mr16,
          ]}>
          <Text style={themedStyles.chartFooterSliderButtonTitle}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={themedStyles.chartFooterCell}>
        <TouchableOpacity
          onPress={() => onSellStock(sliderValue)}
          style={[
            themedStyles.chartFooterButtonContainer,
            themedStyles.chartFooterButtonFall,
          ]}>
          <Text style={themedStyles.chartFooterButtonText}>Sell</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onBuyStock(sliderValue)}
          style={[
            themedStyles.chartFooterButtonContainer,
            themedStyles.chartFooterButtonRise,
          ]}>
          <Text style={themedStyles.chartFooterButtonText}>Buy</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

interface Props {
  chartData: IPoint[];
}
export function GameChartBoard({ chartData }: Props) {
  const { theme } = useContext(ThemeContext);
  const { onSetActiveStock, stocks, activeStock } = useContext(GameContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const [isChart, setIsChart] = useState(false);

  useEffect(() => {
    setIsChart(false);
    setTimeout(() => setIsChart(true), 50);
  }, [activeStock]);

  const [isStockListExpanded, setIsStockListExpanded] = useState<boolean>(
    false,
  );

  const onStockPress = useCallback(
    (item: IStock) => {
      setIsStockListExpanded(false);
      onSetActiveStock(item);
    },
    [onSetActiveStock, setIsStockListExpanded],
  );

  return (
    <SafeAreaView style={themedStyles.container}>
      <View style={themedStyles.chartArea}>
        <ChartHeader themedStyles={themedStyles} data={chartData} />
        <StockList
          data={stocks}
          activeStock={activeStock}
          onItemPress={() => setIsStockListExpanded(true)}
        />
        <View style={themedStyles.chartContainer}>
          <View style={themedStyles.chartView}>
            {isChart && <LineChart data={chartData} />}
          </View>
        </View>
      </View>
      <View style={themedStyles.infoArea}>
        <ChartFooter themedStyles={themedStyles} />
      </View>

      <DefaultModal
        isVisible={isStockListExpanded}
        onBackdropPress={() => setIsStockListExpanded(false)}
        style={themedStyles.expandedStocksContainer}>
        <View style={themedStyles.expandedStocksSubcontainer}>
          <ExpandedStockList
            data={stocks}
            activeStock={activeStock}
            onItemPress={onStockPress}
          />
        </View>
      </DefaultModal>
    </SafeAreaView>
  );
}
