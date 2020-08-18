import React, { useContext, useMemo } from 'react';
import { View, Text } from 'react-native';

import { ThemeContext, IapContext } from '../../contexts';
import { getThemedStyles } from './styles';
import { TilesList } from '../TilesList';
import { ISubscriptionPlan } from '../../types';

interface Props {
  subscriptions: ISubscriptionPlan[];
  onSubscriptionPress: (subscription: ISubscriptionPlan) => void;
}

export function SubscriptionsList({
  subscriptions,
  onSubscriptionPress,
}: Props) {
  const { theme } = useContext(ThemeContext);
  const { activeSubscription } = useContext(IapContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <TilesList
      onTilePress={onSubscriptionPress}
      data={subscriptions}
      extraData={activeSubscription}
      renderItem={({ item }) => (
        <View
          style={[
            themedStyles.itemContainer,
            activeSubscription?.id === item.id
              ? themedStyles.activeItemContainer
              : null,
          ]}>
          <Text style={themedStyles.itemPriceText}>$ {item.price}</Text>
          <Text style={themedStyles.itemBalanceText}>
            An additional ${item.balance / 1000}k balance, up to $500k
          </Text>
        </View>
      )}
      keyExtractor={(item) => `radio-subscription-${item.id}`}
    />
  );
}
