import React from 'react';
import {View, Text, StyleSheet, Alert} from 'react-native';
import CustemButton from '../../utils/CustemButton';

const Index = () => {
  return (
    <View style={{flex: 1, padding: 30}}>
      <Text>signup</Text>

      <CustemButton
        text="SignUp"
        primaryOutline
        onPress={() => Alert.alert('signup')}
      />
    </View>
  );
};

export default Index;
