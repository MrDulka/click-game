import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { createStore } from 'redux';
import { reducer } from './reducers/index.js';

let store = createStore(reducer);

ReactDOM.render(
  <Root store = {store}/>,
  document.getElementById('root')
);
