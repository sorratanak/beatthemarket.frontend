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

const GET_ACCOUNT_BALANCES = gql`
  query AccountBalances($gameId: String!, $email: String!) {
    accountBalances(gameId: $gameId, email: $email) {
      id
      name
      balance
      counterParty
      amount
    }
  }
`;

const queries = {
  GET_ACCOUNT_BALANCES,
  SUBSCRIBE_PORTFOLIO,
};

export default { queries };
