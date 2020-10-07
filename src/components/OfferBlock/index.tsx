import React, { useContext, useMemo, useCallback } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { requestPurchase, getProducts } from 'react-native-iap';
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
  preset: TOfferBlockPreset;
  onPurchase: () => void;
}

export function OfferBlock({ title, preset, onPurchase }: Props) {
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
  }, [preset]);

  const { onSelectPurchase } = useContext(IapContext);

  const onItemPress = useCallback(
    (item: IOfferBlockItem) => {
      const foundPurchase = _.find(
        ONE_TIME_PURCHASE_TYPE,
        (purch) => purch.RNIAP_PRODUCT_ID === item.id,
      );

      onSelectPurchase(foundPurchase);

      getProducts([foundPurchase.RNIAP_PRODUCT_ID]).then((result) => {
        const purchase = _.find(
          result,
          (el) => el.productId === foundPurchase.RNIAP_PRODUCT_ID,
        );
        requestPurchase(purchase?.productId).then(onPurchase);
      });
    },
    [preset, onSelectPurchase],
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
