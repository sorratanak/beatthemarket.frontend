import { gql } from '@apollo/client';

const SUBSCRIBE_PORTFOLIO = gql`
  subscription PortfolioUpdates($gameId: String!) {
    portfolioUpdates(gameId: $gameId) {
      ... on ProfitLoss {
        profitLoss
        stockId
        gameId
        profitLossType
      }
      ... on AccountBalance {
        id
        name
        balance
        counterParty
        amount
      }
    }
  }
`;

const queries = {
  SUBSCRIBE_PORTFOLIO,
};

export default { queries };
