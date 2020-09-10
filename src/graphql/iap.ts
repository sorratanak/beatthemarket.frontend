import { gql } from '@apollo/client';

const VERIFY_PAYMENT_SUBSCRIPTION = gql`
  mutation VerifyPayment(
    $productId: String!
    $provider: String!
    $token: String!
  ) {
    verifyPayment(productId: $productId, provider: $provider, token: $token) {
      paymentId
      productId
      provider
    }
  }
`;

const VERIFY_PAYMENT_PURCHASE = gql`
  mutation VerifyPaymentPurchase(
    $productId: String!
    $provider: String!
    $token: String!
  ) {
    verifyPaymentPurchase(
      productId: $productId
      provider: $provider
      token: $token
    ) {
      paymentId
      productId
      provider
    }
  }
`;

const queries = { VERIFY_PAYMENT_SUBSCRIPTION, VERIFY_PAYMENT_PURCHASE };

export default { queries };
