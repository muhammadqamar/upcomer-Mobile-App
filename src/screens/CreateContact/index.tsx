import React from 'react';
import {Button, Text, View} from 'react-native';

import {CONTACTS_LIST} from '../../constants/routeName';

const Index = ({navigation}: any) => {
  return (
    <View>
      <Text>i am create contsct screen</Text>
      <Button
        title="Contacts"
        color="#fccc33"
        onPress={() => navigation.navigate(CONTACTS_LIST)}
      />
    </View>
  );
};

export default Index;
