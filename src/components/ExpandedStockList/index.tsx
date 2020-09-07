import React, { useContext, useMemo, useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import moment from 'moment';
import _ from 'lodash';

import { getThemedStyles } from './styles';
import { IStock, IStockChange, IPoint } from '../../types';
import { ThemeContext } from '../../contexts';
import { getStockChanges, getLastAndPrelast } from '../../utils/parsing';

interface ExpandedStockListItemProps {
  item: IStock;
  activeStockId: string;
  onPress: (item: IStock) => void;
  themedStyles: any;
}
function ExpandedStockListItem({
  item,
  activeStockId,
  onPress,
  themedStyles,
}: ExpandedStockListItemProps) {
  const [prelastPoint, lastPoint]: IPoint[] = useMemo(() => {
    const lastTicks = getLastAndPrelast(item.ticks);
    return _.map(lastTicks, (tick) => {
      if (!tick) {
        return null;
      }

      return {
        x: moment(Number(tick.stockTickTime)).format('mm:ss'),
        y: tick.stockTickClose,
      };
    });
  }, [item?.ticks]);

  const [stockChange, setStockChange] = useState<IStockChange>(null);

  useEffect(() => {
    setStockChange(getStockChanges(prelastPoint, lastPoint));
  }, [prelastPoint, lastPoint]);

  const isActive: boolean = item.id === activeStockId;

  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={[
        themedStyles.listItemContainer,
        isActive ? themedStyles.activeListItemContainer : null,
      ]}>
      <View style={themedStyles.rowContainer}>
        <Text style={themedStyles.listItemTitle}>{item.symbol}</Text>
        {!!stockChange?.difference && (
          <View style={themedStyles.hugeFlexContainer}>
            <Text>
              {stockChange.currentValue?.toFixed(2)}
              {'  '}
            </Text>
            <View
              style={[
                themedStyles.listItemStockChangeContainer,
                stockChange.difference > 0
                  ? themedStyles.positiveStockChange
                  : themedStyles.negativeStockChange,
              ]}>
              <Text style={themedStyles.listItemStockChangeDifference}>
                {stockChange.difference.toFixed(2)}
              </Text>
            </View>
          </View>
        )}
        {item.ticks?.length !== 0 && (
          <Text style={themedStyles.listItemStockAgoTime}>
            {moment(
              Number(item.ticks[item.ticks.length - 1].stockTickTime),
            ).fromNow()}
          </Text>
        )}
      </View>
      <View style={themedStyles.rowContainer}>
        {!!stockChange?.difference && (
          <Text
            style={[
              themedStyles.listItemDifferenceLine,
              stockChange.difference > 0
                ? themedStyles.positiveDifferenceLine
                : themedStyles.negativeDifferenceLine,
            ]}>
            {stockChange.difference > 0 ? 'In height' : 'In decline'}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
}

interface Props {
  data: IStock[];
  activeStock: IStock;
  onItemPress: (item: IStock) => void;
}
export function ExpandedStockList({ data, activeStock, onItemPress }: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  // TODO maybe refactor this
  if (_.some(data, (el) => !el.ticks)) {
    return null;
  }

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      extraData={activeStock}
      renderItem={({ item }) => (
        <ExpandedStockListItem
          item={item}
          activeStockId={activeStock?.id}
          onPress={onItemPress}
          themedStyles={themedStyles}
        />
      )}
      keyExtractor={(item: IStock, index: number) =>
        `expanded-stock-list-item-${item.id}-${index}`
      }
      contentContainerStyle={themedStyles.contentContainer}
      style={themedStyles.container}
    />
  );
}
