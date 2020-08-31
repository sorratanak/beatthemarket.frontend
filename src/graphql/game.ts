import { gql } from '@apollo/client';

const CREATE_GAME = gql`
  mutation CreateGame($gameLevel: Int!) {
    createGame(gameLevel: $gameLevel) {
      id
      stocks {
        id
        name
        symbol
      }
    }
  }
`;

const START_GAME = gql`
  mutation StartGame($id: String!, $startPosition: Int) {
    startGame(id: $id, startPosition: $startPosition) {
      stockTickId
      stockTickTime
      stockTickClose
      stockId
      stockName
    }
  }
`;

const SUBSCRIBE_STOCK_TICKS = gql`
  subscription StockTicks($gameId: String!) {
    stockTicks(gameId: $gameId) {
      stockTickId
      stockTickTime
      stockTickClose
      stockId
    }
  }
`;

const BUY_STOCK = gql`
  mutation BuyStock($input: BuyStock!) {
    buyStock(input: $input) {
      message
    }
  }
`;

const SELL_STOCK = gql`
  mutation SellStock($input: SellStock!) {
    sellStock(input: $input) {
      message
    }
  }
`;

const SUBSCRIBE_GAME_EVENTS = gql`
  subscription GameEvents($gameId: String!) {
    gameEvents(gameId: $gameId) {
      ... on ControlEvent {
        event
        gameId
      }
      ... on LevelStatus {
        event
        gameId
        profitLoss
        level
      }
      ... on LevelTimer {
        gameId
        level
        minutesRemaining
        secondsRemaining
      }
    }
  }
`;

const PAUSE_GAME = gql`
  mutation PauseGame($gameId: String!) {
    pauseGame(gameId: $gameId) {
      event
      gameId
    }
  }
`;

const RESUME_GAME = gql`
  mutation ResumeGame($gameId: String!) {
    resumeGame(gameId: $gameId) {
      event
      gameId
    }
  }
`;

const queries = {
  CREATE_GAME,
  START_GAME,
  SUBSCRIBE_STOCK_TICKS,
  BUY_STOCK,
  SELL_STOCK,
  SUBSCRIBE_GAME_EVENTS,
  PAUSE_GAME,
  RESUME_GAME,
};

export default { queries };
