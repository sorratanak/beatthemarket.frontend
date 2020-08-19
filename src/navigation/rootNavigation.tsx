import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { UserContext } from '../contexts/userContext';
import { MainNavComponent, AuthStack } from '.';
import { styles } from './styles';

const RootNavigation = () => {
  const { user } = useContext(UserContext);

  return (
    <View style={styles.containerStyle}>
      <NavigationContainer>
        {/* {user ? <MainNavComponent /> : <AuthStack />} */}
        <MainNavComponent />
      </NavigationContainer>
    </View>
  );
};

export default RootNavigation;
