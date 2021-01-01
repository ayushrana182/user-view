import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// Pages 
import HomePage from './pages/HomePage';
import OrderPage from './pages/OrderPage';
import BillingPage from './pages/BillingPage'
import Page404 from './pages/Page404';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Switch>
        <Route exact path = "/" > <HomePage /> </Route> 
        <Route path = "/cart" > <OrderPage /> </Route> 
        <Route path = "/Billing" > <BillingPage /> </Route> 


        <Route path = "*" > <Page404 /> </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
