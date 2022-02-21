import * as React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {Appbar, Badge} from 'react-native-paper';

const Index = ({navigation, scene}: any) => (
  <Appbar.Header style={styles.header}>
    <Appbar.Action
      style={styles.Game}
      icon={() => (
        <Image
          source={require('../../assets/images/game-tab.png')}
          style={{width: 40, height: 40}}
        />
      )}
      onPress={() => navigation.openDrawer()}
    />

    <Appbar.Action
      style={[styles.BgColor, styles.SpaceLeft]}
      icon={require('../../assets/images/search.png')}
      size={18}
      onPress={() => {}}
    />

    <Badge style={styles.Badge}>3</Badge>
    <Appbar.Action
      style={[styles.BgColor, styles.NotificationSpace]}
      size={18}
      icon={require('../../assets/images/Noti-Icon.png')}
      onPress={() => {}}></Appbar.Action>

    <Appbar.Action
      style={styles.User}
      icon={() => (
        <Image
          source={require('../../assets/images/img.png')}
          style={{width: 36, height: 36}}
          resizeMode="contain"
        />
      )}
      onPress={() => {}}
    />
  </Appbar.Header>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    height: 44,
    width: '100%',
    paddingHorizontal: 16,
  },
  Game: {
    width: 40,
    height: 40,
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'baseline',
  },
  User: {
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    marginLeft: 16,
  },
  BgColor: {
    width: 36,
    height: 36,
    backgroundColor: '#262626',
    borderRadius: 50,
  },
  SpaceLeft: {
    marginLeft: 'auto',
  },
  NotificationSpace: {
    marginLeft: 16,
    position: 'relative',
  },

  Badge: {
    position: 'absolute',
    top: 2,
    right: 74,
    zIndex: 1,
    width: 14,
    backgroundColor: '#DDBE76',
    color: '#080808',
    fontWeight: '600',
    fontSize: 10,
    lineHeight: 12,
  },
});

export default Index;
