import React, { useContext, useMemo } from 'react';
import { View, Text, ViewStyle } from 'react-native';

import { ThemeContext } from '../../contexts';
import { getThemedStyles } from './styles';
import { TilesList } from '../TilesList';
import { IPurchase } from '../../types';

interface Props {
  title: string;
  subscriptions: IPurchase[];
  onSubscriptionPress: (subscription: IPurchase) => void;
  style?: {
    container?: ViewStyle;
  };
}

export function SubscriptionsList({
  title,
  subscriptions,
  onSubscriptionPress,
  style: propStyle = {},
}: Props) {
  const { theme } = useContext(ThemeContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <>
      <Text style={themedStyles.itemPriceText}>{title}</Text>
      <TilesList
        onTilePress={onSubscriptionPress}
        data={subscriptions}
        tileStyle={themedStyles.tileContainer}
        renderItem={({ item }) => (
          <View style={themedStyles.itemContainer}>
            <Text style={themedStyles.itemPriceText}>$ {item.PRICE}</Text>
            <Text style={themedStyles.itemBalanceText}>{item.TITLE}</Text>
          </View>
        )}
        keyExtractor={(item, index) => `radio-subscription-${item.id}-${index}`}
        style={propStyle.container}
      />
    </>
  );
}
