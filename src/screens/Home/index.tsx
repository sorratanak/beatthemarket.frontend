import React, { useContext, useCallback, useEffect, useMemo } from 'react';
import { useMutation, useQuery } from '@apollo/client';

import { ScreenProps } from './props';
import { Container, ScoreBoard, DefaultButton } from '../../components';
import { GameContext, ThemeContext, UserContext } from '../../contexts';
import gameGraphql from '../../graphql/game';
import usersGraphql from '../../graphql/users';
import { getThemedStyles } from './styles';
import { START_GAME_LEVEL, QUERY_WITH_ERRORS_OPTIONS } from '../../constants';

export function Home({ navigation }: ScreenProps) {
  const { onSetGameId, onSetStocks } = useContext(GameContext);
  const { logout } = useContext(UserContext);

  /* Mutations */
  const [
    createGame,
    { data: createGameResponse, error: createGameError },
  ] = useMutation(gameGraphql.queries.CREATE_GAME, QUERY_WITH_ERRORS_OPTIONS);
  const [startGame, { data: startGameResponse }] = useMutation(
    gameGraphql.queries.START_GAME,
  );

  /* Queries */
  const { data: users, loading: usersLoading, error: usersError } = useQuery(
    usersGraphql.queries.GET_USERS,
  );

  /* Error Handling */
  useEffect(() => {
    if (createGameError) {
      logout();
    }
  }, [createGameError]);

  useEffect(() => {
    if (createGameResponse?.createGame) {
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
    createGame({ variables: { gameLevel: START_GAME_LEVEL } });
  }, []);

  const { theme } = useContext(ThemeContext);
  const themedStyles = useMemo(() => getThemedStyles(theme), [theme]);

  return (
    <Container style={themedStyles.container}>
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
