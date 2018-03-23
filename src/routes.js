// src/routes.js
import React from 'react';
import { Router, Route } from 'react-router'

import Home from './views/Home';
import About from './views/About';
import Signup from './views/Signup';
import Profile from './views/Profile';
import NotFound from './views/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/profile" component={Profile} />
    <Route path="/signup" component={Signup} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;
