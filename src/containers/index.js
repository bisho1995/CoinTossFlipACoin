import React from 'react';
import Home from './home';
import Statistics from './statistics';
import Settings from './settings';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

const WithNavigation = ({theme: colors}) => {
  const TabNavigator = createBottomTabNavigator(
    {
      Home: {
        screen: Home,
        navigationOptions: {
          tabBarIcon: () => (
            <Icon style={{color: '#fff'}} name="home" size={30} />
          ),
        },
      },
      Statistics: {
        screen: Statistics,
        navigationOptions: {
          tabBarIcon: () => (
            <Icon style={{color: '#fff'}} name="file-text" size={24} />
          ),
        },
      },
      Settings: {
        screen: Settings,
        navigationOptions: {
          tabBarIcon: () => (
            <Icon style={{color: '#fff'}} name="gear" size={26} />
          ),
        },
      },
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: ({navigation}) => {},

      tabBarOptions: {
        showLabel: false,
        activeTintColor: colors.secondaryText,
        inactiveTintColor: 'grey',
        style: {
          paddingTop: 0,
          backgroundColor: colors.surfaceColor,
        },
      },
    },
  );
  const Comp = createAppContainer(TabNavigator);
  return <Comp />;
};
const mapStateToProps = ({ThemeReducer: {theme}}) => ({theme});

export default connect(mapStateToProps)(WithNavigation);
