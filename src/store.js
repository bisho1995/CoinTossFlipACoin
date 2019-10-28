import AsyncStorage from '@react-native-community/async-storage';
import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';

import rootReducer from './reducers/rootReducer';

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['rootReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(logger));

store.subscribe(async () => {
  try {
    await AsyncStorage.setItem('state', JSON.stringify(store.getState()));
  } catch (err) {
    console.log(err);
  }
});

const persistor = persistStore(store);

export {store, persistor};
