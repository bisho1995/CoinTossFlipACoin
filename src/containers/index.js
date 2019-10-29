import Home from './home';
import Statistics from './statistics';
import Settings from './settings';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

// export default Home;

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Statistics: Statistics,
  Settings: Settings,
});

export default createAppContainer(TabNavigator);
