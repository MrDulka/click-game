import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { createStore } from 'redux';
import { reducer } from './reducers/index.js';
import css from './styles.css';

let initialState = {
  leaderboard: [
  {
    name: "John Doe",
    clicks: 123
  },
  {
    name: "Random",
    clicks: 1
  },
  {
    name: "Gogo",
    clicks: 1000
  }
  ],
  session: {
    id: "random string",
    team: "John Doe",
    sessionClicks: 12
  }

}

let store = createStore(reducer, initialState);

ReactDOM.render(
  <Root store = {store}/>,
  document.getElementById('root')
);
