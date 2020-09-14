import React, { useContext, useMemo, useState, useCallback } from 'react';
import { View, Image } from 'react-native';
import { CardElement } from '@stripe/react-stripe-js';

import { ThemeContext, IapContext } from '../../contexts';
import { getThemedStyles, CARD_ELEMENT_OPTIONS } from './styles';
import { DefaultInput } from '../DefaultInput';
import { THEME_KEYS } from '../../constants';
import { DefaultButton } from '../DefaultButton';
import { PayButton } from '../PayButton';
import { IMAGES } from '../../assets';
import { IStripeUserInfo } from '../../types';
import { getMoneyFormat } from '../../utils';

export function BuySubscriptionModal() {
  const { theme, themeKey } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const { activeSubscription, onRequestSubscription } = useContext(IapContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

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
              onRequestSubscription(activeSubscription?.stripeId, getUserInfo())
            }
            style={{
              container: themedStyles.payButtonContainer,
              text: themedStyles.payButtonTitle,
            }}>
            {`Pay $${activeSubscription?.price}`}
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
