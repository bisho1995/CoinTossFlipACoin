import React from 'react';
import Home from './home';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';
import UseTheme from '../context/UseTheme';
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

  return <Nav />;
});
