import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HOME_NAVIGATOR, HOME_PAGE} from '../constants/routeName';
import HomeNavigator from './HomeNavigator';
import TabNavigator from './TabNavigator';
import HeaderBar from '../utils/HeaderBar';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{
        header: ({scene, navigation}: any) => (
          <HeaderBar scene={scene} navigation={navigation} />
        ),
      }}>
      <Drawer.Screen name={HOME_PAGE} component={HomeNavigator} />
      <Drawer.Screen name={HOME_NAVIGATOR} component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
