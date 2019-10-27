import React from 'react';
import WithTheme from './context/withTheme';
import App from './containers/index';
import {store, persistor} from './store';
import {Provider, connect} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

class MyApp extends React.PureComponent {
  render() {
    const {colors} = this.props;
    const ThemedApp = WithTheme(App, colors);

    return <ThemedApp />;
  }
}

function mapStateToProps(state) {
  const {theme} = state;
  return {colors: theme};
}

const CoinToss = connect(mapStateToProps)(MyApp);
export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <CoinToss />
    </PersistGate>
  </Provider>
);
