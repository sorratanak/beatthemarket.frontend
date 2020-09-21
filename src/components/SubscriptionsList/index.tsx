import React, { useContext, useMemo } from 'react';
import { View, Text } from 'react-native';

import { ThemeContext, IapContext } from '../../contexts';
import { getThemedStyles } from './styles';
import { TilesList } from '../TilesList';
import { IPurchase } from '../../types';

interface Props {
  subscriptions: IPurchase[];
  onSubscriptionPress: (subscription: IPurchase) => void;
}

export function SubscriptionsList({
  subscriptions,
  onSubscriptionPress,
}: Props) {
  const { theme } = useContext(ThemeContext);
  const { selectedSubscription } = useContext(IapContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <TilesList
      onTilePress={onSubscriptionPress}
      data={subscriptions}
      tileStyle={themedStyles.tileContainer}
      extraData={selectedSubscription}
      renderItem={({ item }) => (
        <View
          style={[
            themedStyles.itemContainer,
            selectedSubscription?.RNIAP_PRODUCT_ID === item.RNIAP_PRODUCT_ID
              ? themedStyles.activeItemContainer
              : null,
          ]}>
          <Text style={themedStyles.itemPriceText}>$ {item.PRICE}</Text>
          <Text style={themedStyles.itemBalanceText}>
            An additional ${item.PRICE * 100}k balance, up to $500k
          </Text>
        </View>
      )}
      keyExtractor={(item, index) => `radio-subscription-${item.id}-${index}`}
    />
  );
}
