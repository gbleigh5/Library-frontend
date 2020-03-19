import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import rootReducer from './store/rootReducer';
import Home from './containers/Home';

const log = createLogger({ diff: true, collapsed: true });
const middlewares = [thunk, log];
const enhancers = [];

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares), ...enhancers));

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);