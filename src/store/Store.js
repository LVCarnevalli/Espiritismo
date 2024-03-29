import AsyncStorage from '@react-native-async-storage/async-storage';
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { persistCombineReducers, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducers from './reducers'; // where reducers is a object of reducers

const config = {
  key: 'root',
  storage: AsyncStorage,
  //debug: true //to get useful logging
};
const middleware = [];

// if (__DEV__) {
//     middleware.push(createLogger());
// }
middleware.push(thunk);
const reducers = persistCombineReducers(config, rootReducers);
const enhancers = [applyMiddleware(...middleware)];
const persistConfig = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
  //console.log(store.getState());
});
const configureStore = () => {
  return { persistor, store };
};

export default configureStore;
