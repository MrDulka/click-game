import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Session from './Session';

/*
react-router is the source of truth for the url, but maybe this should be included
  in the redux store instead
*/
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
