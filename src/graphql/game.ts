import { gql } from '@apollo/client';

const CREATE_GAME = gql`
  mutation CreateGame($gameLevel: String!) {
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
  mutation StartGame($id: String!) {
    startGame(id: $id) {
      message
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
      stockName
    }
  }
`;

const queries = {
  CREATE_GAME,
  START_GAME,
  SUBSCRIBE_STOCK_TICKS,
};

export default { queries };
