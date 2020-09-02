import React, { useContext, useMemo } from 'react';
import { View, Text, FlatList } from 'react-native';
import { CardElement } from '@stripe/react-stripe-js';

import {
  DefaultButton,
  RuleBlock,
  ContainerWithBurgerMenu,
} from '../../components';
import { SUBSCRIPTION_TYPE } from '../../constants';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { IapContext } from '../../contexts/iapContext.web';
import { getThemedRules } from './tiles';

// TODO temporary styles here
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

export function Rules() {
  const { theme } = useContext(ThemeContext);
  // TODO temporary iap here
  const { onRequestSubscription } = useContext(IapContext);

  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);
  const themedRules = useMemo(() => getThemedRules(theme), [theme]);

  return (
    <ContainerWithBurgerMenu style={themedStyles.container}>
      <FlatList
        data={themedRules}
        numColumns={2}
        renderItem={({ item }) => <RuleBlock item={item} />}
        keyExtractor={(item) => `rule-info-${item.id}`}
      />
      <Text>Card details</Text>
      <View style={{ width: '100%' }}>
        <CardElement options={CARD_ELEMENT_OPTIONS} />
        {/* <button type="submit">Confirm order</button> */}
        <DefaultButton
          onPress={() =>
            onRequestSubscription(
              SUBSCRIPTION_TYPE.ADDITIONAL_BALANCE_100K.STRIPE_PRODUCT_ID,
            )
          }>
          Confirm order
        </DefaultButton>
      </View>
    </ContainerWithBurgerMenu>
  );
}
