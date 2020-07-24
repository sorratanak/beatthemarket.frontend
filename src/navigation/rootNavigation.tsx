import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { UserContext } from '../userContext';
import { MainStackComponent, AuthStackComponent } from '.';

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
