import React from 'react';
import WithTheme from './context/withTheme';
import App from './containers/index';
import {store, persistor} from './store';
import {Provider, connect} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Loading from './components/loading';
class MyApp extends React.PureComponent {
  render() {
    const {colors} = this.props;
    const ThemedApp = WithTheme(App, colors);

    return <ThemedApp />;
  }
}

const mapStateToProps = ({ThemeReducer: {theme}}) => ({colors: theme});

const CoinToss = connect(mapStateToProps)(MyApp);
export default () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <CoinToss />
    </PersistGate>
  </Provider>
);
