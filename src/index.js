import React from 'react';

import ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from 'react-redux'
import thunk from "redux-thunk";
import createSagaMiddleware from 'redux-saga'

import './index.css';
import App from './App';
import {sagaWatcher} from "./redux/sagas";
import {forbiddenWordsMiddleware} from "./redux/middleware";
import {rootReducer} from "./redux/rootReducer";

const saga = createSagaMiddleware()

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk, forbiddenWordsMiddleware, saga
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

saga.run(sagaWatcher)

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
