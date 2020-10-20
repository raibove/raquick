import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import './App.css';

import Customers from './customer/pages/Customers';
import DisplayStocks from './stock/pages/DisplayStocks';
import Landing from './landing/pages/Landing';
import AgentProfile from './agent/pages/AgentProfile';
import Stocks from './scan/pages/Scan';

const App = ()=> {
  return (
    <Router>
      <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/customers/display" exact>
        <Customers />
      </Route>
      <Route path="/scan" exact>
        <Stocks />
      </Route>
      <Route path="/stocks" exact>
        <DisplayStocks />
      </Route>
      <Route path="/agent" exact>
        <AgentProfile  />
      </Route>
      <Redirect to="/"/>
      </Switch>
    </Router>
  );
};
export default App;
