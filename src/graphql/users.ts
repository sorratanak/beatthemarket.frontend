import { gql } from '@apollo/client';

const GET_USERS = gql`
  query Users {
    users {
      userEmail
      userName
      userExternalUid
      subscriptions {
        paymentId
        productId
        provider
      }
      games {
        gameId
        status
        profitLoss {
          profitLoss
          stockId
          gameId
          profitLossType
        }
      }
    }
  }
`;

const queries = {
  GET_USERS,
};

export default { queries };
