import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import Axios from "axios";
import './App.css';

import ProtectedRoute from './ProtectedRoutes';
import Customers from './customer/pages/Customers';
import DisplayStocks from './stock/pages/DisplayStocks';
import Landing from './landing/pages/Landing';
import AgentProfile from './agent/pages/AgentProfile';
import Stocks from './scan/pages/Scan';
import Auth from './autherization/pages/Auth';
import Scan from './scan/pages/Scan';


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
      <Route path="/auth" component={Auth} exact />
      <ProtectedRoute path="/agent" component={AgentProfile} exact/>
      <ProtectedRoute path="/customers/display" component={Customers} exact />
      <ProtectedRoute path="/scan" exact component={Scan}/>
      <ProtectedRoute path="/stocks" component={DisplayStocks} exact />
          
      <Redirect to="/"/>
      </Switch>
    </Router>
  );
};
export default App;
