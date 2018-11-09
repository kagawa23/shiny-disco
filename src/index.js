import React, { PureComponent } from 'react';
// import { StyleSheet, TabBarIOS } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from 'react-navigation';
import Constants from './common/constants';
import Home from './home';
import DIY from './diy';
import Materials from './materials';
import Mine from './mine';
import Classes from './classes';

function iconWrapper({ name }) {
  return ({ tintColor }) => <Icon name={name} size={20} color={tintColor} />;
}

export default createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        title: '首页',
        tabBarIcon: iconWrapper({ name: 'home' }),
      }),
    },
    DIY: {
      screen: DIY,
      navigationOptions: () => ({
        title: 'DIY',
        tabBarIcon: iconWrapper({ name: 'pencil' }),
      }),
    },
    Classes: {
      screen: Classes,
      navigationOptions: () => ({
        title: '3D学堂',
        tabBarIcon: iconWrapper({ name: 'book' }),
      }),
    },
    Materials: {
      screen: Materials,
      navigationOptions: ({ navigation }) => ({
        title: '素材库',
        tabBarIcon: iconWrapper({ name: 'photo' }),
        tabBarVisible: navigation.state.index === 0,
      }),
    },
    Mine: {
      screen: Mine,
      navigationOptions: () => ({
        title: '我的',
        tabBarIcon: iconWrapper({ name: 'user' }),
      }),
    },
  },
  {
    tabBarOptions: {
      inactiveTintColor: Constants.SHALLOW_COLOR,
      activeTintColor: Constants.DEEP_COLOR,
    },
    initialRouteName: 'Home',
  },
);
