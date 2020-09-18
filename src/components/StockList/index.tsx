import React, { useContext, useMemo } from 'react';
import { FlatList, TouchableOpacity, Text, Platform } from 'react-native';
import _ from 'lodash';

import { getThemedStyles } from './styles';
import { IStock } from '../../types';
import { ThemeContext, PortfolioContext } from '../../contexts';

interface StockListItemProps {
  item: IStock;
  activeStockId: string;
  onPress: (item: IStock) => void;
  themedStyles: any;
}
function StockListItem({
  item,
  activeStockId,
  onPress,
  themedStyles,
}: StockListItemProps) {
  const { balance } = useContext(PortfolioContext);

  const currentSharesBalance = balance
    ? _.find(
        Object.values(balance),
        (someBalance) => item.name === someBalance.counterParty,
      )
    : null;

  const isActive: boolean = item.id === activeStockId;

  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={[
        themedStyles.listItemContainer,
        isActive ? themedStyles.activeListItemContainer : null,
      ]}>
      <Text style={themedStyles.listItemTitle}>
        {Platform.OS === 'web' ? item.name : item.symbol}
      </Text>
      <Text style={themedStyles.listItemShares}>
        {Platform.OS === 'web' ? 'Shares:' : ''}{' '}
        {currentSharesBalance?.amount || 0}
      </Text>
    </TouchableOpacity>
  );
}

interface Props {
  data: IStock[];
  activeStock: IStock;
  onItemPress: (item: IStock) => void;
}
export function StockList({ data, activeStock, onItemPress }: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
      extraData={activeStock}
      renderItem={({ item }) => (
        <StockListItem
          item={item}
          activeStockId={activeStock?.id}
          onPress={onItemPress}
          themedStyles={themedStyles}
        />
      )}
      keyExtractor={(item: IStock, index: number) =>
        `stock-list-item-${item.id}-${index}`
      }
      contentContainerStyle={themedStyles.contentContainer}
      style={themedStyles.container}
    />
  );
}
