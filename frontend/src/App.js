import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Axios from "axios";
import './App.css';

import Customers from './customer/pages/Customers';
import DisplayStocks from './stock/pages/DisplayStocks';
import Landing from './landing/pages/Landing';
import AgentProfile from './agent/pages/AgentProfile';
import Stocks from './scan/pages/Scan';
import Auth from './autherization/pages/Auth';


const App = ()=> {
  /*Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data.message);
  });*/
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
      <Route path="/auth" exact>
        <Auth />
      </Route>
      <Redirect to="/"/>
      </Switch>
    </Router>
  );
};
export default App;
