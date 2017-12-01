import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/index.js';
import css from './styles.css';
import thunk from 'redux-thunk';

let initialState = {
  leaderboard: [],
  fetchingLeaderboard: false,
  session: {}  
}

let store = createStore(reducer, initialState, applyMiddleware(thunk));

ReactDOM.render(
  <Root store = {store}/>,
  document.getElementById('root')
);
