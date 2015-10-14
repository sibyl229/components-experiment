import React from 'react';
//import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect, Link } from 'react-router';
import history from './History';
import App from './App.js';




React.render(
  <Router history={history}>
    <Route path="/" component={App}>
    </Route>
  </Router>, document.getElementById('root'));

