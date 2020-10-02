import React, { useContext, useMemo, useEffect } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
// import { useQuery } from '@apollo/client';
import _ from 'lodash';

import { getThemedStyles } from './styles';
import {
  ThemeContext,
  UserContext,
  GameContext,
  PortfolioContext,
} from '../../contexts';
import { IMAGES } from '../../assets';
// import usersGraphql from '../../graphql/users';
// import { ScoreBoard } from '../ScoreBoard';
import { DefaultButton } from '../DefaultButton';
import { ACCOUNT_BALANCE_TYPE } from '../../constants';
import { getMoneyFormat } from '../../utils';
import { OfferBlock } from '../OfferBlock';

const HEADER_TYPES = {
  LOSE: 'lose',
  WIN: 'win',
};

interface Props {
  headerType: 'lose' | 'win';
  onFinishPress: () => void;
  isVisible: boolean;
}

export function EndGameModal({ headerType, onFinishPress, isVisible }: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const {
    user: { userName },
  } = useContext(UserContext);
  const { stocks, gameScore, onGetUserProfitLoss, userProfitLoss } = useContext(
    GameContext,
  );

  const { balance } = useContext(PortfolioContext);

  const balanceSumm = useMemo(
    () =>
      balance
        ? _.reduce(
            balance,
            (accum, el) =>
              accum +
              (el.name !== ACCOUNT_BALANCE_TYPE.EQUITY ? el.balance : 0),
            0,
          )
        : 0,
    [balance],
  );

  useEffect(() => {
    if (isVisible) {
      onGetUserProfitLoss();
    }
  }, [isVisible]);

  const [leftImageSource, title, rightImageSource] = useMemo(() => {
    switch (headerType) {
      case HEADER_TYPES.LOSE:
        return [IMAGES.SAD_FACE, 'Game over', IMAGES.SAD_FACE];
      case HEADER_TYPES.WIN:
        return [IMAGES.HAPPY_FACE, 'End of game', IMAGES.HAPPY_FACE];
      default:
        return [];
    }
  }, [headerType]);

  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.titleContainer}>
        <Image source={leftImageSource} style={themedStyles.titleIcon} />
        <Text style={themedStyles.title}>{title}</Text>
        <Image source={rightImageSource} style={themedStyles.titleIcon} />
      </View>

      <View style={themedStyles.contentContainer}>
        <View style={themedStyles.userInfoContainer}>
          <Text style={themedStyles.subTitle}>{userName}</Text>
          <View style={themedStyles.userLvlContainer}>
            <Text style={themedStyles.userLvl}>Level {gameScore?.level}</Text>
          </View>
        </View>

        <View style={themedStyles.profitsContainer}>
          <Text style={themedStyles.profitsTitle}>Profits:</Text>
          <FlatList
            data={userProfitLoss}
            renderItem={({ item }) => (
              <Text style={themedStyles.profitItem}>{`- ${
                _.find(stocks, (stock) => stock.id === item.stockId)?.name
              }: (${getMoneyFormat(item.profitLoss)})`}</Text>
            )}
            keyExtractor={(item) => `end-game-profit-${item}`}
          />
        </View>
      </View>

      {headerType === HEADER_TYPES.LOSE && (
        <OfferBlock
          title="Do you need more attempts?"
          preset="additionalBalance"
        />
      )}

      <View style={themedStyles.footerContainer}>
        <Text style={themedStyles.balanceText}>
          Balance: {getMoneyFormat(balanceSumm)}
        </Text>
        <DefaultButton
          onPress={onFinishPress}
          style={{ container: themedStyles.buttonContainer }}>
          Finish
        </DefaultButton>
      </View>
    </View>
  );
}
