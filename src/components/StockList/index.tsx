import React, { useContext } from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';

import { getThemedStyles } from './styles';
import { IStock } from '../../types';
import { UserContext } from '../../contexts/userContext';

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
  const isActive: boolean = item.id === activeStockId;

  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={[
        isActive
          ? themedStyles.activeListItemContainer
          : themedStyles.listItemContainer,
      ]}>
      <Text style={themedStyles.listItemTitle}>{item.name}</Text>
    </TouchableOpacity>
  );
}

interface Props {
  data: IStock[];
  activeStock: IStock;
  onItemPress: (item: IStock) => void;
}
export function StockList({ data, activeStock, onItemPress }: Props) {
  const { theme } = useContext(UserContext);
  const themedStyles = getThemedStyles(theme);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={data}
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
