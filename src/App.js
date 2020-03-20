import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import 'antd/dist/antd.css';

import rootReducer from './store/rootReducer';
import Layout from './containers/Layout';

const log = createLogger({ diff: true, collapsed: true });
const middlewares = [thunk, log];
const enhancers = [];

const store = createStore(rootReducer, compose(applyMiddleware(...middlewares), ...enhancers));

export default () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);