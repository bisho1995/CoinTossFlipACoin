import React from 'react';
import Home from './home';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import UseTheme from '../context/UseTheme';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
const MyDrawerNavigator = colors =>
  createDrawerNavigator(
    {
      Home: {
        screen: Home,
      },
    },
    {
      drawerPosition: 'right',
      initialRouteName: 'Home',
      drawerBackgroundColor: colors.darkPrimary,
    },
  );

export default UseTheme(({consumer: {colors}}) => {
  const Nav = createAppContainer(MyDrawerNavigator(colors));
  changeNavigationBarColor(colors.darkPrimary);

  return <Nav />;
});
