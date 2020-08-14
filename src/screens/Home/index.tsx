import React, { useContext, useCallback, useEffect } from 'react';
import { Button } from 'react-native';
import { useMutation, useQuery } from '@apollo/client';

import { ScreenProps } from './props';
import { Container, ScoreBoard } from '../../components';
import { UserContext } from '../../contexts/userContext';
import { GameContext } from '../../contexts/gameContext';
import gameGraphql from '../../graphql/game';
import usersGraphql from '../../graphql/users';

export function Home({ navigation }: ScreenProps) {
  const { logout } = useContext(UserContext);
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

  return (
    <Container>
      <ScoreBoard users={users} />
      <Button
        testID="Create Game"
        title="Create Game"
        onPress={onCreateGamePress}
      />
      <Button testID="logout" title="Logout" onPress={logout} />
    </Container>
  );
}
