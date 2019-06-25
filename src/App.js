import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import GlobalState from './context/GlobalState';
import ValidationForm from './components/ValidationForm';
import Dashboard from './components/Dashboard';
import RequiredAuth from './components/Auth/RequiredAuth';

function App() {
  return (
    <GlobalState>
      <Router>
          <Switch>
              <Route component={ValidationForm} exact path="/" />
              <Route component={RequiredAuth(Dashboard)} path="/main" />
          </Switch>
      </Router>
    </GlobalState>
  );
}

export default App;
