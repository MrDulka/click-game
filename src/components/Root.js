import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Session from './Session';

const Root = ({ store }) => (
  <Provider store = {store}>
    <Router>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/:team" component = {Session}/>
      </Switch>
    </Router>
  </Provider>
);

export default Root;
