import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View } from 'react-native';
import { UserContext } from '../userContext';
import { TabComponent, AuthStackComponent } from '.';
import { styles } from './styles';

const RootNavigation = () => {
  const { token } = useContext(UserContext);

  return (
    <View style={styles.containerStyle}>
      <NavigationContainer>
        {token ? <TabComponent /> : <AuthStackComponent />}
      </NavigationContainer>
    </View>
  );
};

export default RootNavigation;
