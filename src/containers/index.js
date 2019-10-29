import React from 'react';
import Home from './home';
import Statistics from './statistics';
import Settings from './settings';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Icon} from 'native-base';
import {connect} from 'react-redux';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const WithNavigation = ({theme: colors}) => {
  const TabNavigator = createBottomTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          tabBarLabel: 'Flip',
          tabBarIcon: () => (
            <Icon
              style={{color: colors.secondaryLight}}
              name="ios-home"
              size={40}
            />
          ),
        },
      },
      Statistics: {
        screen: Statistics,
        navigationOptions: {
          tabBarLabel: 'Statistics',
          tabBarIcon: () => (
            <Icon
              style={{color: colors.secondaryLight}}
              name="checkmark-circle-outline"
              size={40}
            />
          ),
        },
      },
      Settings: {
        screen: Settings,
        navigationOptions: {
          tabBarLabel: 'Settings',
          tabBarIcon: () => (
            <Icon
              style={{color: colors.secondaryLight}}
              name="ios-settings"
              size={40}
            />
          ),
        },
      },
    },
    {
      initialRouteName: 'Home',

      tabBarOptions: {
        activeTintColor: colors.secondaryText,
        inactiveTintColor: 'grey',
        style: {
          paddingTop: 10,
          backgroundColor: colors.darkPrimary,
        },
      },
    },
  );
  changeNavigationBarColor(colors.darkPrimary);
  const Comp = createAppContainer(TabNavigator);
  return <Comp />;
};
const mapStateToProps = ({theme}) => ({theme});

export default connect(mapStateToProps)(WithNavigation);
