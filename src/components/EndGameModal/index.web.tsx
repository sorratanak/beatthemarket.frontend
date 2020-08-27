import React, { useContext } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';
import { getThemedStyles } from './styles';
import { ThemeContext } from '../../contexts';
import { IMAGES } from '../../assets';
import usersGraphql from '../../graphql/users';
import { ScoreBoard } from '../ScoreBoard';
import { DefaultButton } from '../DefaultButton';
import { PROFITS, BALANCE } from './dummyData';

interface Props {
  isLoseGame?: boolean;
  setIsModalVisible: (isModalVisible: boolean) => void;
}

export function EndGameModal({ isLoseGame, setIsModalVisible }: Props) {
  const { theme } = useContext(ThemeContext);
  const themedStyles = getThemedStyles(theme);

  // Query
  // eslint-disable-next-line no-unused-vars
  const { data: users, loading: usersLoading, error: usersError } = useQuery(
    usersGraphql.queries.GET_USERS,
  );

  return (
    <View style={themedStyles.container}>
      <View style={themedStyles.subContainer}>
        {isLoseGame ? (
          <View style={themedStyles.titleContainer}>
            <Image
              source={IMAGES.LOSE_GAME_LEFT}
              style={themedStyles.titleIcon}
            />
            <Text style={themedStyles.title}>Game over</Text>
            <Image
              source={IMAGES.LOSE_GAME_RIGHT}
              style={themedStyles.titleIcon}
            />
          </View>
        ) : (
          <View style={themedStyles.titleContainer}>
            <Image
              source={IMAGES.WIN_GAME_LEFT}
              style={themedStyles.titleIcon}
            />
            <Text style={themedStyles.title}>End of game</Text>
            <Image
              source={IMAGES.WIN_GAME_RIGHT}
              style={themedStyles.titleIcon}
            />
          </View>
        )}

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
                isLoseGame
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
              onPress={() => {
                setIsModalVisible(false);
              }}
              style={{ container: themedStyles.buttonContainer }}>
              Finish
            </DefaultButton>
          </View>
        </View>
      </View>
    </View>
  );
}
