/* eslint-disable import/no-extraneous-dependencies */
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    // promise,
    logger,
  ),
);

export default store;
