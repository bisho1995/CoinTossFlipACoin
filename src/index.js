import React from 'react';
import WithTheme from './context/withTheme';
import App from './containers/index';
import {store, persistor} from './store';
import {Provider, connect} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import changeNavigationBarColor from 'react-native-navigation-bar-color';
import {enableScreens} from 'react-native-screens';

class MyApp extends React.PureComponent {
  render() {
    const {colors} = this.props;
    const ThemedApp = WithTheme(App, colors);

    return <ThemedApp />;
  }
}

const mapStateToProps = ({theme}) => ({colors: theme});

const CoinToss = connect(mapStateToProps)(MyApp);
export default () => {
  changeNavigationBarColor('#757575');
  enableScreens();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CoinToss />
      </PersistGate>
    </Provider>
  );
};
