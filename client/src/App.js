import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

//import Axios from "axios";
import './App.css';

import ProtectedRoute from './ProtectedRoutes';
import Landing from './landing/pages/Landing';
import Auth from './autherization/pages/Auth';
import AgentProfile from './agent/pages/AgentProfile';
import Customers from './customer/pages/Customers';
import Scan from './scan/pages/Scan';
import DisplayStocks from './stock/pages/DisplayStocks';
import AddCustomer from './customer/pages/AddCustomer';
import AddStock from './stock/pages/AddStock';
import DisplayCustomers from './customer/pages/DisplayCustomer';
/*
const AgentProfile = React.lazy(() => import('./agent/pages/AgentProfile'));
const Customers = React.lazy(()=> import('./customer/pages/Customers'));
const Scan = React.lazy(()=> import('./scan/pages/Scan'));
const DisplayStocks = React.lazy(()=> import('./stock/pages/DisplayStocks'));
*/


const App = ()=> {
  const routes = <Switch>
    <Route path="/" exact>
      <Landing />
    </Route>
    <Route path="/auth" component={Auth} exact />
    <ProtectedRoute path="/agent" component={AgentProfile} exact/>
    <ProtectedRoute path="/customers/display" component={Customers} exact />
    <ProtectedRoute path="/scan" exact component={Scan}/>
    <ProtectedRoute path="/stocks" component={DisplayStocks} exact />
    <ProtectedRoute path="/addCustomer" component={AddCustomer} exact/>
    <ProtectedRoute path="/stocks/add" component={AddStock} exact />
    <ProtectedRoute path="/customers/:cardNo" component={DisplayCustomers} exact />
    <Redirect to="/"/>
    </Switch>
  return (
    <Router>
      {routes}
    </Router>
  );
};
export default App;
