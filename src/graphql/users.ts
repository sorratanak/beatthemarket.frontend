import { gql } from '@apollo/client';

const GET_USER_INFO = gql`
  query User($email: String!) {
    user(email: $email) {
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
  GET_USER_INFO,
  GET_USERS,
};

export default { queries };
