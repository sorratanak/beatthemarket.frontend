import { StyleSheet } from 'react-native';

import { ITheme } from '../../themes/interface';

export const getThemedStyles = (theme: ITheme) =>
  StyleSheet.create({
    textInputStyle: {
      borderWidth: 1,
      borderColor: 'grey',
      width: '80%',
      height: 50,
      marginTop: 10,
      textAlign: 'center',
    },
    signinWindow: {
      width: '80%',
    },
  });
