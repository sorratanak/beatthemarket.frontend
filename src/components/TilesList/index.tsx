import React from 'react';
import { FlatList, FlatListProps } from 'react-native';

import { TouchableTile } from '..';
import { styles } from './styles';

interface Props extends FlatListProps<any> {
  onTilePress: (item: any) => void;
}

const NUM_COLUMNS = 2;

export function TilesList({
  onTilePress,
  renderItem,
  style,
  contentContainerStyle,
  ...props
}: Props) {
  return (
    <FlatList
      numColumns={NUM_COLUMNS}
      {...props}
      renderItem={({ item, ...renderItemProps }) => (
        <TouchableTile onPress={() => onTilePress(item)}>
          {renderItem({ item, ...renderItemProps })}
        </TouchableTile>
      )}
      contentContainerStyle={[styles.contentListContainer, style]}
      style={[styles.listContainer, contentContainerStyle]}
    />
  );
}
