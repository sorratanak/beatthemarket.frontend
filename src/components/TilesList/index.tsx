import React from 'react';
import { FlatList, FlatListProps, ViewStyle } from 'react-native';

import { TouchableTile } from '..';
import { styles } from './styles';

interface Props extends FlatListProps<any> {
  onTilePress: (item: any) => void;
  tileStyle?: ViewStyle;
}

export function TilesList({
  onTilePress,
  renderItem,
  tileStyle = null,
  numColumns = 2,
  style,
  contentContainerStyle,
  ...props
}: Props) {
  return (
    <FlatList
      scrollEnabled={false}
      numColumns={numColumns}
      {...props}
      renderItem={({ item, ...renderItemProps }) => (
        <TouchableTile onPress={() => onTilePress(item)} style={tileStyle}>
          {renderItem({ item, ...renderItemProps })}
        </TouchableTile>
      )}
      contentContainerStyle={[
        styles.contentListContainer,
        contentContainerStyle,
      ]}
      style={[styles.listContainer, style]}
    />
  );
}
