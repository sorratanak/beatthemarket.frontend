import React, { useContext } from 'react';
import { FlatList, TouchableOpacity, Text } from 'react-native';

import { getThemedStyles } from './styles';
import { IStockTick } from '../../types';
import { UserContext } from '../../contexts/userContext';

interface StockListItemProps {
  item: IStockTick;
  onPress: (item: IStockTick) => void;
  themedStyles: any;
}
function StockListItem({ item, onPress, themedStyles }: StockListItemProps) {
  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={themedStyles.listItemContainer}>
      <Text style={themedStyles.listItemTitle}>{item.stockId}</Text>
    </TouchableOpacity>
  );
}

interface Props {
  data: IStockTick[];
  onItemPress: (item: IStockTick) => void;
}
export function StockList({ data, onItemPress }: Props) {
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
          onPress={onItemPress}
          themedStyles={themedStyles}
        />
      )}
      keyExtractor={(item: IStockTick, index: number) =>
        `stock-list-item-${item.stockId}-${index}`
      }
      contentContainerStyle={themedStyles.contentContainer}
      style={themedStyles.container}
    />
  );
}
