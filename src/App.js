import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
// import { Route } from 'react-router';

import { Grid } from '@material-ui/core';
import Header from './Header';
import OrderPage from './pages/OrderPage';
import HomePage from './pages/HomePage';
import HeaderContainer from './components/HeaderContainer';
import HeaderTable from './components/OrdersTable';
function App() {
  return (
    <div id = "home-page">
    < Header />
    {/* <HeaderContainer page = "Home Page"/>
    <HeaderTable/> */}

    {/* <switch>
      <Route exact path = '/' component = {HomePage}></Route>
      <Route exact path = '/orders' component = {OrderPage}></Route>
    </switch> */}
    </div>
    
  );
}

export default App;
