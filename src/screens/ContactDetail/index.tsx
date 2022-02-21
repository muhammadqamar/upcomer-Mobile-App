import React from 'react';
import {Button, Text, View} from 'react-native';

import {CREATE_CONTACT} from '../../constants/routeName';

const Index = ({navigation}: any) => {
  return (
    <View>
      <Text>i am create contsct screen</Text>
      <Button
        title="Create Contact"
        color="#fccc33"
        onPress={() => navigation.navigate(CREATE_CONTACT)}
      />
    </View>
  );
};
export default Index;
