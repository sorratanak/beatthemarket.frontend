import React, { useContext, useMemo, useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import { IPoint, IStockChange, IUser, IStock } from '../../types';
import { LineChart } from '../LineChart';
import { GameContext, UserContext } from '../../contexts';
import { getThemedStyles } from './styles';
import { getStockChanges } from '../../utils/parsing';
import { StockList } from '../StockList';

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
        <Text style={themedStyles.chartHeaderTitle}>{activeStock.name} </Text>
        <Text style={themedStyles.chartHeaderTitleAbbr}>
          ({activeStock.symbol})
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
        <StockList
          data={stocks}
          activeStock={activeStock}
          onItemPress={onSetActiveStock}
        />
      </View>
    </View>
  );
}
