import React, { useContext, useMemo, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity, Platform } from 'react-native';
import _ from 'lodash';

import { ThemeContext, IapContext } from '../../contexts';
import { TOfferBlockPreset, IOfferBlockItem } from '../../types';
import { getThemedStyles } from './styles';
import { OFFER_PRESET_TYPE, ONE_TIME_PURCHASE_TYPE } from '../../constants';
import {
  ADDITIONAL_BALANCE_PRESET_DATA,
  ADDITIONAL_MARGIN_TRADING_AND_BALANCE_PRESET_DATA,
  ADDITIONAL_TIME_PRESET_DATA,
} from './presets';

interface Props {
  title?: string;
  onItemPressCallback?: () => void;
  preset: TOfferBlockPreset;
}

export function OfferBlock({ title, preset, onItemPressCallback }: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const offerPresetData = useMemo((): IOfferBlockItem[] => {
    switch (preset) {
      case OFFER_PRESET_TYPE.ADDITIONAL_BALANCE:
        return ADDITIONAL_BALANCE_PRESET_DATA;
      case OFFER_PRESET_TYPE.ADDITIONAL_TIME:
        return ADDITIONAL_TIME_PRESET_DATA;
      case OFFER_PRESET_TYPE.ADDITIONAL_MARGIN_TRADING_AND_BALANCE:
        return ADDITIONAL_MARGIN_TRADING_AND_BALANCE_PRESET_DATA;
      default:
        return [];
    }
  }, [preset, themedStyles]);

  const { onSelectPurchase, onRequestPurchase } = useContext(IapContext);

  const onItemPress = useCallback(
    (item: IOfferBlockItem) => {
      onItemPressCallback();

      const idField = Platform.select({
        web: 'stripeId',
        ios: 'id',
        android: 'id',
      });

      switch (preset) {
        case OFFER_PRESET_TYPE.ADDITIONAL_BALANCE:
          onSelectPurchase(
            _.find(
              ONE_TIME_PURCHASE_TYPE,
              (sub) => sub[idField] === item[idField],
            ),
          );
          onRequestPurchase();
          break;
        case OFFER_PRESET_TYPE.ADDITIONAL_TIME:
          break;
        case OFFER_PRESET_TYPE.ADDITIONAL_MARGIN_TRADING_AND_BALANCE:
          break;
        default:
          break;
      }
    },
    [preset, onItemPressCallback],
  );

  return (
    <View style={themedStyles.container}>
      {!!title && <Text style={themedStyles.title}>{title}</Text>}
      <FlatList
        horizontal
        data={offerPresetData}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onItemPress(item)}
            style={themedStyles.offerItemContainer}>
            <Text style={themedStyles.offerItemTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => `offer-item-${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={themedStyles.offerListContentContainer}
      />
    </View>
  );
}
