import React, { useContext, useMemo, useCallback, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import _ from 'lodash';

import { DefaultModal } from '../DefaultModal';
import { ThemeContext, IapContext } from '../../contexts';
import { TOfferBlockPreset, IOfferBlockItem } from '../../types';
import { getThemedStyles, MODAL_CONTAINER_STYLE } from './styles';
import {
  OFFER_PRESET_TYPE,
  ONE_TIME_PURCHASE_TYPE,
  PURCHASE_TYPE,
} from '../../constants';
import {
  ADDITIONAL_BALANCE_PRESET_DATA,
  ADDITIONAL_MARGIN_TRADING_AND_BALANCE_PRESET_DATA,
  ADDITIONAL_TIME_PRESET_DATA,
} from './presets';
import { BuySubscriptionModal } from '../BuySubscriptionModal';

interface Props {
  title?: string;
  preset: TOfferBlockPreset;
  onPurchase: () => void;
}

export function OfferBlock({ title, preset, onPurchase }: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const [isPayModalVisible, setIsPayModalVisible] = useState<boolean>(false);

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
      onSelectPurchase(
        _.find(
          ONE_TIME_PURCHASE_TYPE,
          (purch) => purch.STRIPE_PRODUCT_ID === item.stripeId,
        ),
      );

      setIsPayModalVisible(true);
    },
    [preset, setIsPayModalVisible, onSelectPurchase],
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

      <DefaultModal
        isVisible={isPayModalVisible}
        isBackdrop
        onBackdropPress={() => setIsPayModalVisible(false)}
        style={MODAL_CONTAINER_STYLE}>
        <BuySubscriptionModal
          paymentCallback={() => {
            setIsPayModalVisible(false);
            onPurchase();
          }}
          purchaseType={PURCHASE_TYPE.ONE_TIME_PURCHASE}
        />
      </DefaultModal>
    </View>
  );
}
