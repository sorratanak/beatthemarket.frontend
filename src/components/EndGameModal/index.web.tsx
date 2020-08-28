import React, { useContext, useMemo } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { IMAGES } from '../../assets';
import usersGraphql from '../../graphql/users';
import { ScoreBoard } from '../ScoreBoard';
import { DefaultButton } from '../DefaultButton';
import { PROFITS, BALANCE } from './dummyData';

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

  // Query
  // eslint-disable-next-line no-unused-vars
  const { data: users, loading: usersLoading, error: usersError } = useQuery(
    usersGraphql.queries.GET_USERS,
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
      <View style={themedStyles.subContainer}>
        <View style={themedStyles.titleContainer}>
          <Image source={leftImageSource} style={themedStyles.titleIcon} />
          <Text style={themedStyles.title}>{title}</Text>
          <Image source={rightImageSource} style={themedStyles.titleIcon} />
        </View>

        <View style={themedStyles.contentContainer}>
          <View style={themedStyles.rankInfo}>
            <Text style={themedStyles.subTitle}>Lorem ipsum</Text>
            <View style={themedStyles.scoreBoardContainer}>
              <ScoreBoard users={users} isTabsVisible={false} />
            </View>
          </View>
          <View style={themedStyles.resultInfo}>
            <View style={themedStyles.userInfoContainer}>
              <Text style={themedStyles.subTitle}>Cris Brown</Text>
              <Text style={themedStyles.userLvl}>Level 3</Text>
            </View>
            <Text
              style={
                headerType === 'lose'
                  ? themedStyles.loseMessage
                  : [themedStyles.loseMessage, themedStyles.hidden]
              }>
              Lost at level 2
            </Text>
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
            <Text style={themedStyles.balanceText}>Balance {BALANCE}</Text>
            <DefaultButton
              onPress={onFinishPress}
              style={{ container: themedStyles.buttonContainer }}>
              Finish
            </DefaultButton>
          </View>
        </View>
      </View>
    </View>
  );
}
