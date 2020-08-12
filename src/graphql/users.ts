import { gql } from '@apollo/client';

const GET_USERS = gql`
  query Users {
    users {
      userEmail
      userName
      userExternalUid
    }
  }
`;

const queries = {
  GET_USERS,
};

export default { queries };
