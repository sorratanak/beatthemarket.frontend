import React from 'react';
import { FlatList, FlatListProps, ViewStyle } from 'react-native';

import { TouchableTile } from '..';
import { styles } from './styles';

interface Props extends FlatListProps<any> {
  onTilePress: (item: any) => void;
  tileStyle?: ViewStyle;
}

const NUM_COLUMNS = 2;

export function TilesList({
  onTilePress,
  renderItem,
  tileStyle = null,
  style,
  contentContainerStyle,
  ...props
}: Props) {
  return (
    <FlatList
      scrollEnabled={false}
      numColumns={NUM_COLUMNS}
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
