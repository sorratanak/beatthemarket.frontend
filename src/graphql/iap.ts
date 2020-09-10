import { gql } from '@apollo/client';

// TODO remove comment

// const VERIFY_PAYMENT_SUBSCRIPTION = gql`
//   mutation VerifyPaymentSubscription(
//     $productId: String!
//     $provider: String!
//     $token: String!
//   ) {
//     verifyPaymentSubscription(
//       productId: $productId
//       provider: $provider
//       token: $token
//     ) {
//       paymentId
//       productId
//       provider
//     }
//   }
// `;

const VERIFY_PAYMENT = gql`
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

const queries = { VERIFY_PAYMENT };

export default { queries };
