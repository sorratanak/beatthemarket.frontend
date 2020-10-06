import React, { useContext, useMemo, useState, useCallback } from 'react';
import { View, Image } from 'react-native';
import { CardElement } from '@stripe/react-stripe-js';

import { ThemeContext, IapContext } from '../../contexts';
import { getThemedStyles, CARD_ELEMENT_OPTIONS } from './styles';
import { DefaultInput } from '../DefaultInput';
import { THEME_KEYS, PURCHASE_TYPE } from '../../constants';
import { DefaultButton } from '../DefaultButton';
import { PayButton } from '../PayButton';
import { IMAGES } from '../../assets';
import { IStripeUserInfo, PurchaseType } from '../../types';

interface Props {
  purchaseType: PurchaseType;
  paymentCallback?: () => void;
}

export function BuySubscriptionModal({
  purchaseType,
  paymentCallback = () => null,
}: Props) {
  const { theme, themeKey } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const {
    selectedPurchase,
    selectedSubscription,
    onRequestPurchase,
    onRequestSubscription,
  } = useContext(IapContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [currentPurchase, currentRequestPurchase] = useMemo(() => {
    switch (purchaseType) {
      default:
      case PURCHASE_TYPE.ONE_TIME_PURCHASE:
        return [selectedPurchase, onRequestPurchase];
      case PURCHASE_TYPE.SUBSCRIPTION:
        return [selectedSubscription, onRequestSubscription];
    }
  }, [
    selectedPurchase,
    onRequestPurchase,
    selectedSubscription,
    onRequestSubscription,
    purchaseType,
  ]);

  const getUserInfo = useCallback((): IStripeUserInfo => {
    return {
      name,
      email,
      phone,
    };
  }, [name, email, phone]);

  return (
    <View style={themedStyles.container} pointerEvents="box-none">
      <View style={themedStyles.formContainer}>
        <DefaultInput value={name} onChangeText={setName} placeholder="name" />
        <DefaultInput
          value={email}
          onChangeText={setEmail}
          placeholder="email"
        />
        <DefaultInput
          value={phone}
          onChangeText={setPhone}
          placeholder="phone"
        />
        <View style={themedStyles.w100}>
          <View style={themedStyles.cardContainer}>
            <CardElement options={CARD_ELEMENT_OPTIONS(theme)} />
          </View>
          <DefaultButton
            onPress={() =>
              currentRequestPurchase(getUserInfo(), paymentCallback)
            }
            style={{
              container: themedStyles.payButtonContainer,
              text: themedStyles.payButtonTitle,
            }}>
            {`Pay $${currentPurchase?.PRICE || 0}`}
          </DefaultButton>
        </View>

        <View style={themedStyles.socialPayContainer}>
          <PayButton
            image={
              themeKey === THEME_KEYS.LIGHT_THEME
                ? IMAGES.WHITE_APPLE
                : IMAGES.APPLE
            }
            title="Pay"
            onPress={() => {}}
            style={{
              container: themedStyles.mr20,
            }}
          />
          <PayButton image={IMAGES.GOOGLE} title="Pay" onPress={() => {}} />
        </View>
        <Image
          source={IMAGES.YELLOW_CREDIT_CARD}
          style={themedStyles.yellowCreditCardBackground}
        />
        <Image
          source={IMAGES.GRAY_CREDIT_CARD}
          style={themedStyles.grayCreditCardBackground}
        />
      </View>
    </View>
  );
}
