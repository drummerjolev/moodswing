import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from './Dashboard.js';
import Login from './Login.js';

import './css/bootstrap.css';
import './css/custom.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
