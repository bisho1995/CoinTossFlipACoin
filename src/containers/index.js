import colors from '../styles/colors';
import Home from './home';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

const MyDrawerNavigator = createDrawerNavigator(
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

export default createAppContainer(MyDrawerNavigator);
