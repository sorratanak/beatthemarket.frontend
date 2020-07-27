import { gql } from '@apollo/client';

import { graphqlApi } from '.';

const loginQuery = async (googleAccessToken: string) => {
  const response = await graphqlApi.query({
    query: gql`
      mutation Login {
        login {
          message
        }
      }
    `,
  });

  console.log('LOGIN_QUERY', response);
  return response;
};

const loginQueries = {
  loginQuery,
};

export default loginQueries;
