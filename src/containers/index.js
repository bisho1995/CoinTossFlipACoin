import React from 'react';
import Home from './home';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import UseTheme from '../context/UseTheme';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

export default createAppContainer(
  createDrawerNavigator(
    {
      Home: {
        screen: Home,
      },
    },
    {
      drawerPosition: 'right',
      initialRouteName: 'Home',
      drawerBackgroundColor: '#FFF9C4',
    },
  ),
);
