import { gql } from '@apollo/client';

import { graphqlApi } from '.';
import { IUser } from '../types';

const loginQuery = async (): Promise<IUser> => {
  const response = await graphqlApi.mutate({
    mutation: gql`
      mutation Login {
        login {
          message
          user
        }
      }
    `,
  });

  const parsedUser: IUser = JSON.parse(response.data.login.user);

  return parsedUser;
};

const createGameQuery = gql`
  mutation CreateGame($gameLevel: String!) {
    createGame(gameLevel: $gameLevel) {
      id
      stocks
    }
  }
`;

const queries = {
  loginQuery,
  createGameQuery,
};

export default queries;
