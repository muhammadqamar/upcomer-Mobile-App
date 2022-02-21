import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';
import AuthNavigator from './AuthNavigator';

const Index = () => {
  const isLogedIn = false;
  return (
    <NavigationContainer>
      {isLogedIn ? <DrawerNavigator /> : <AuthNavigator />}
      {/* <AuthNavigator /> */}
    </NavigationContainer>
  );
};

export default Index;
