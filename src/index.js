import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers'

import './index.css';

import Root from './components/Root';

const rootElement = document.getElementById('root');

// create rootReducer in reducers/index.js then init the store using reducer and thunk middleware for delayed action creators (for API call).
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware
  )
);

//Debug purposes
//store.subscribe(() => {console.log(store.getState())})

// Pass store as prop Root component to consumption by Provider
ReactDOM.render(
  <Root store={store} />,
  rootElement
);