import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {HOME, VIDEOS, MATCHES, PREDICT, FOLLOWED} from '../constants/routeName';

import Contacts from '../screens/Contacts';
import Settings from '../screens/Settings';
import ContactDetail from '../screens/ContactDetail';
import CreateContact from '../screens/CreateContact';
import {Image, StyleSheet} from 'react-native';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={HOME}
      screenOptions={() => ({
        headerShown: true,
        tabBarStyle: {
          height: 49,
          paddingHorizontal: 0,
          paddingTop: 0,
          paddingBottom: 0,
          backgroundColor: '#080808',
          position: 'absolute',
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {fontWeight: '500', fontSize: 10, lineHeight: 12},
        tabBarActiveTintColor: '#DDBE76',
      })}>
      <Tab.Screen
        name={HOME}
        component={Contacts}
        options={{
          tabBarIcon: ({focused}) => {
            const image = focused
              ? require('../assets/images/Bottom_Tab_Icon/homeActive.png')
              : require('../assets/images/Bottom_Tab_Icon/home.png');
            return <Image style={Styles.tabImages} source={image} />;
          },
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => {
            const image = focused
              ? require('../assets/images/Bottom_Tab_Icon/videos.png')
              : require('../assets/images/Bottom_Tab_Icon/videos.png');

            return <Image style={Styles.tabImages} source={image} />;
          },
        }}
        name={VIDEOS}
        component={Settings}
      />
      <Tab.Screen
        name={MATCHES}
        component={ContactDetail}
        options={{
          tabBarIcon: ({focused}) => {
            const image = focused
              ? require('../assets/images/Bottom_Tab_Icon/matchesActive.png')
              : require('../assets/images/Bottom_Tab_Icon/matches.png');
            return <Image style={Styles.tabImages} source={image} />;
          },
        }}
      />
      <Tab.Screen
        name={PREDICT}
        component={CreateContact}
        options={{
          tabBarIcon: ({focused}) => {
            const image = focused
              ? require('../assets/images/Bottom_Tab_Icon/predictActive.png')
              : require('../assets/images/Bottom_Tab_Icon/predict.png');
            return <Image style={Styles.tabImages} source={image} />;
          },
        }}
      />
      <Tab.Screen
        name={FOLLOWED}
        component={CreateContact}
        options={{
          tabBarIcon: ({focused}) => {
            const image = focused
              ? require('../assets/images/Bottom_Tab_Icon/followedActive.png')
              : require('../assets/images/Bottom_Tab_Icon/followed.png');
            return <Image style={Styles.tabImages} source={image} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Styles = StyleSheet.create({
  tabImages: {
    width: 18,
    height: 18,
  },
});

export default TabNavigator;
