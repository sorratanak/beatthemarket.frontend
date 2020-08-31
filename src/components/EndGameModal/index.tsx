import React, { useContext, useMemo } from 'react';
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
import { PROFITS } from './dummyData';
import { ACCOUNT_BALANCE_TYPE } from '../../constants';

const HEADER_TYPES = {
  LOSE: 'lose',
  WIN: 'win',
};

interface Props {
  headerType: 'lose' | 'win';
  onFinishPress: () => void;
}

export function EndGameModal({ headerType, onFinishPress }: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  const {
    user: { userName },
  } = useContext(UserContext);
  const { gameEvents } = useContext(GameContext);

  const { balance } = useContext(PortfolioContext);

  const activeBalance = useMemo(
    () =>
      _.find(
        Object.values(balance),
        (someBalance) => someBalance.name === ACCOUNT_BALANCE_TYPE.CASH,
      ),
    [balance],
  );

  const [leftImageSource, title, rightImageSource] = useMemo(() => {
    switch (headerType) {
      case HEADER_TYPES.LOSE:
        return [IMAGES.LOSE_GAME_LEFT, 'Game over', IMAGES.LOSE_GAME_RIGHT];
      case HEADER_TYPES.WIN:
        return [IMAGES.WIN_GAME_LEFT, 'End of game', IMAGES.WIN_GAME_RIGHT];
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
            <Text style={themedStyles.userLvl}>Level {gameEvents?.level}</Text>
          </View>
        </View>

        <View style={themedStyles.profitsContainer}>
          <Text style={themedStyles.profitsTitle}>Profits:</Text>
          <FlatList
            data={PROFITS}
            renderItem={({ item }) => (
              <Text style={themedStyles.profitItem}>{`- ${item}`}</Text>
            )}
            keyExtractor={(item) => `end-game-profit-${item}`}
          />
        </View>
      </View>

      <View style={themedStyles.footerContainer}>
        <Text style={themedStyles.balanceText}>
          Balance: {activeBalance?.balance?.toFixed(2)}
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
