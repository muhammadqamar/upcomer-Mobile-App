import React from 'react';
import {Text, View, Button, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {REGISTER} from '../../constants/routeName';

const Index = ({navigation}: any) => {
  return (
    <View style={styles.mainView}>
      <Text style={styles.textLog}>i am Login screen</Text>
      <Text style={styles.para}>
        You can change this option at any time in your settings
      </Text>

      <View style={styles.rgbLine}>
        <LinearGradient
          colors={[
            'rgba(221, 190, 118, 0)',
            'rgba(221, 190, 118, 1)',
            'rgba(221, 190, 118, 0)',
          ]}
          style={styles.linearGradient}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate(REGISTER)}>
        <LinearGradient
          colors={['rgba(253, 245, 166, 1)', 'rgba(184, 135, 70, 1)']}
          style={styles.linearGradientTetUp}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}>
          <Text style={styles.setup}>Quick setup</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 26,
    backgroundColor: '#000',
  },
  textLog: {
    fontSize: 20,
    lineHeight: 16,
    fontFamily: 'DrukCyr-Medium',
    color: '#fff',
  },
  para: {
    fontSize: 15,
    lineHeight: 24,
    fontFamily: 'SF-Pro',
    color: '#fff',
  },
  rgbLine: {
    marginVertical: 40,
    alignItems: 'center',
  },
  linearGradient: {
    width: 80,
    height: 2,
  },

  linearGradientTetUp: {
    height: 48,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  setup: {
    fontSize: 17,
    lineHeight: 22,
    fontFamily: 'DrukCyr-Medium',
    color: '#262626',
    textTransform: 'uppercase',
  },
});

export default Index;
