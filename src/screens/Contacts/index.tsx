import React from 'react';
import {View, Text, Button} from 'react-native';

import {SETTINGS} from '../../constants/routeName';

const Index = ({navigation}: any) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>I am contact</Text>
      <Button
        title="go setting"
        color="#fc9033"
        onPress={() => navigation.navigate(SETTINGS)}
      />
    </View>
  );
};

export default Index;
