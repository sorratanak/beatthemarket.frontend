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

const queries = {
  CREATE_GAME,
  START_GAME,
  SUBSCRIBE_STOCK_TICKS,
  BUY_STOCK,
  SELL_STOCK,
};

export default { queries };
