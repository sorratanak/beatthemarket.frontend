import React, { useContext, useMemo } from 'react';
import { Text, FlatList } from 'react-native';

import { RuleBlock, ContainerWithBurgerMenu } from '../../components';
import { SUBSCRIPTION_TYPE } from '../../constants';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { IapContext } from '../../contexts/iapContext.web';
import { getThemedRules } from './tiles';

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
    </ContainerWithBurgerMenu>
  );
}
