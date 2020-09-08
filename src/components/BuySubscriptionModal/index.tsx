import React, { useContext, useMemo, useState } from 'react';
import { View } from 'react-native';
import { CardElement } from '@stripe/react-stripe-js';

import { ThemeContext, IapContext } from '../../contexts';
import { getThemedStyles } from './styles';
import { DefaultInput } from '../DefaultInput';
import { CARD_ELEMENT_OPTIONS } from './formOptions';
import { SUBSCRIPTION_TYPE } from '../../constants';
import { DefaultButton } from '../DefaultButton';

// interface Props {}

export function BuySubscriptionModal() {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const { onRequestSubscription } = useContext(IapContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <View style={themedStyles.container}>
      <DefaultInput value={name} onChangeText={setName} />
      <DefaultInput value={email} onChangeText={setEmail} />
      <DefaultInput value={phone} onChangeText={setPhone} />
      <View style={{ width: '100%' }}>
        <CardElement options={CARD_ELEMENT_OPTIONS} />
        {/* <button type="submit">Confirm order</button> */}
        <DefaultButton
          onPress={() =>
            onRequestSubscription(
              SUBSCRIPTION_TYPE.ADDITIONAL_BALANCE_100K.STRIPE_PRODUCT_ID,
            )
          }>
          Buy
        </DefaultButton>
      </View>
    </View>
  );
}
