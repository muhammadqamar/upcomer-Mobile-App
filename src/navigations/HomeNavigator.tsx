import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  CONTACTS_LIST,
  CONTACT_DETAIL,
  SETTINGS,
  CREATE_CONTACT,
  RootStackParamList,
} from '../constants/routeName';

import Contacts from '../screens/Contacts';
import Settings from '../screens/Settings';
import ContactDetail from '../screens/ContactDetail';
import CreateContact from '../screens/CreateContact';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator<RootStackParamList>();

  return (
    <HomeStack.Navigator initialRouteName={CREATE_CONTACT}>
      <HomeStack.Screen name={SETTINGS} component={Settings} />
      <HomeStack.Screen name={CONTACT_DETAIL} component={ContactDetail} />
      <HomeStack.Screen name={CREATE_CONTACT} component={CreateContact} />
      <HomeStack.Screen name={CONTACTS_LIST} component={Contacts} />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
