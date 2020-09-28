import { gql } from '@apollo/client';

import { graphqlApi } from '.';
import { IUser } from '../types';

const login = async (): Promise<IUser> => {
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

const requests = { login };

export default { requests };
