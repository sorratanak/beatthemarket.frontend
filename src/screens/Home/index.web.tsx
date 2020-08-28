import React, { useContext, useCallback, useEffect, useMemo } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { View, Text } from 'react-native';

import { ScreenProps } from './props';
import {
  Container,
  ScoreBoard,
  DefaultButton,
  ScoreRow,
} from '../../components';
import { GameContext, ThemeContext } from '../../contexts';
import gameGraphql from '../../graphql/game';
import usersGraphql from '../../graphql/users';
import { getThemedStyles } from './styles';

export function Home({ navigation }: ScreenProps) {
  const { onSetGameId, onSetStocks } = useContext(GameContext);

  /* Mutations */
  const [createGame, { data: createGameResponse }] = useMutation(
    gameGraphql.queries.CREATE_GAME,
  );
  const [startGame, { data: startGameResponse }] = useMutation(
    gameGraphql.queries.START_GAME,
  );

  /* Queries */
  const { data: users, loading: usersLoading, error: usersError } = useQuery(
    usersGraphql.queries.GET_USERS,
  );

  useEffect(() => {
    if (createGameResponse) {
      startGame({ variables: { id: createGameResponse.createGame.id } });
    }
  }, [createGameResponse]);

  useEffect(() => {
    if (createGameResponse && startGameResponse) {
      const { stocks, id: gameId } = createGameResponse.createGame;
      onSetStocks(stocks);
      onSetGameId(gameId);
      navigation.navigate('Game');
    }
  }, [startGameResponse]);

  const onCreateGamePress = useCallback(() => {
    createGame({ variables: { gameLevel: 1 } });
  }, []);

  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <Container style={themedStyles.container}>
      <View style={themedStyles.headerContainer}>
        <View style={themedStyles.greetContainer}>
          <Text style={themedStyles.greetUserName}>Hello, Cris Brown</Text>
          <Text style={themedStyles.greetText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </Text>
        </View>
        <View style={themedStyles.profileInfoContainer}>
          <View style={themedStyles.profileTitleContainer}>
            <Text style={themedStyles.profileTitle}>Profile</Text>
            <Text style={themedStyles.profileLvl}>Level 3</Text>
          </View>
          <ScoreRow percent="75%" deposit="$123.64" rate="+13.76%" />
        </View>
      </View>

      <ScoreBoard users={users} style={themedStyles.scoreBoardContainer} />
      <DefaultButton
        onPress={onCreateGamePress}
        style={{
          container: themedStyles.playButtonContainer,
        }}>
        Play
      </DefaultButton>
      {/* <Button testID="logout" title="Logout" onPress={logout} /> */}
    </Container>
  );
}
