import React from 'react';
import {Button, Text, View} from 'react-native';

import {CONTACT_DETAIL} from '../../constants/routeName';

const Index = ({navigation}: any) => {
  return (
    <View>
      <Text>i am create contsct screen</Text>
      <Button
        title="Contact Detail"
        color="#fc4433"
        onPress={() => navigation.navigate(CONTACT_DETAIL)}
      />
    </View>
  );
};

export default Index;
