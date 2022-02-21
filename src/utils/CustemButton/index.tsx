import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import React from 'react';

const Index = ({
  onPress,
  text,
  width,
  height,
  color,
  primaryFillColor,
  primaryYellow,
  secondaryYellow,
  secondaryGrey,
  primaryOutline,
}: any) => {
  return (
    <View>
      {primaryFillColor && (
        <TouchableOpacity activeOpacity={0.5} onPress={() => onPress()}>
          <LinearGradient
            colors={
              secondaryGrey
                ? ['#3B3B3B', '#3B3B3B']
                : ['rgba(253, 245, 166, 1)', 'rgba(184, 135, 70, 1)']
            }
            style={[styles.linearGradientTetUp, {width: width, height: height}]}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 1.0}}>
            <Text
              style={[
                styles.setup,
                secondaryGrey && {fontFamily: ' SF-Pro'},
                secondaryYellow && {fontFamily: ' SF-Pro'},
                primaryYellow && {fontFamily: 'DrukCyr-Medium'},
                {color: color},
              ]}>
              {text}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      )}

      {primaryOutline && (
        <LinearGradient
          colors={['rgba(253, 245, 166, 1)', 'rgba(184, 135, 70, 1)']}
          style={[styles.linearGradientTetUp, {width: 200, height: 28}]}
          start={{x: 0.0, y: 1.0}}
          end={{x: 1.0, y: 1.0}}>
          <TouchableOpacity
            style={styles.buttonContainer}
            activeOpacity={0.8}
            onPress={() => onPress()}>
            <Text style={styles.setup}>{text}</Text>
          </TouchableOpacity>
        </LinearGradient>
      )}
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  linearGradientTetUp: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  setup: {
    fontSize: 17,
    lineHeight: 22,
    textTransform: 'uppercase',
  },
  buttonContainer: {
    borderRadius: 8,
    flex: 1.0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '98%',
    marginHorizontal: 3,
    marginVertical: 2,
  },
});
