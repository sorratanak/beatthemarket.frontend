import React, { useContext, useMemo, useState } from 'react';
import { View, Image } from 'react-native';
import { CardElement } from '@stripe/react-stripe-js';

import { ThemeContext, IapContext } from '../../contexts';
import { getThemedStyles, CARD_ELEMENT_OPTIONS } from './styles';
import { DefaultInput } from '../DefaultInput';
import { SUBSCRIPTION_TYPE, THEME_KEYS } from '../../constants';
import { DefaultButton } from '../DefaultButton';
import { PayButton } from '../PayButton';
import { IMAGES } from '../../assets';

// interface Props {}

export function BuySubscriptionModal() {
  const { theme, themeKey } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const { onRequestSubscription } = useContext(IapContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

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
          {/* <button type="submit">Confirm order</button> */}
          <DefaultButton
            onPress={() =>
              onRequestSubscription(
                SUBSCRIPTION_TYPE.ADDITIONAL_BALANCE_100K.STRIPE_PRODUCT_ID,
              )
            }
            style={{
              container: themedStyles.payButtonContainer,
              text: themedStyles.payButtonTitle,
            }}>
            Pay 5$
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
