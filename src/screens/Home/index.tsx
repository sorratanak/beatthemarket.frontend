import React, { useContext, useCallback, useEffect } from 'react';
import { Button } from 'react-native';
// import { StackNavigationProp } from '@react-navigation/stack';
import { useMutation } from '@apollo/client';
// import { StackParams } from '../../navigation';
import { Container, ScoreBoard, StockTicksList } from '../../components';
import { UserContext } from '../../userContext';
import gameGraphql from '../../graphql/game';

// type NavigationProps = StackNavigationProp<StackParams, 'Home'>;

export function Home() {
  const { logout } = useContext(UserContext);

  const [createGame, { data: createGameResponse }] = useMutation(
    gameGraphql.queries.CREATE_GAME,
  );
  const [startGame, { data: startGameResponse }] = useMutation(
    gameGraphql.queries.START_GAME,
  );

  useEffect(() => {
    if (createGameResponse) {
      startGame({ variables: { id: createGameResponse.createGame.id } });
    }
  }, [createGameResponse]);

  console.log('START_GAME data', startGameResponse);

  const onCreateGamePress = useCallback(() => {
    createGame({ variables: { gameLevel: 'one' } });
  }, []);

  return (
    <Container>
      <ScoreBoard />
      {startGameResponse && startGameResponse.startGame && (
        <StockTicksList
          gameId={createGameResponse.createGame.id}
          testID="Stock ticks list"
        />
      )}
      <Button
        testID="Create Game"
        title="Create Game"
        onPress={onCreateGamePress}
      />
      <Button
        testID="logout"
        title="Logout"
        onPress={() => {
          logout();
        }}
      />
    </Container>
  );
}
