import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { UserContext } from '../userContext';
import { MainStackComponent, AuthStackComponent } from '.';
import { View } from 'react-native';

const RootNavigation = () => {
  const { token } = useContext(UserContext);

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        {token ? <MainStackComponent /> : <AuthStackComponent />}
      </NavigationContainer>
    </View>
  );
};

export default RootNavigation;
