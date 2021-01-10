import React from 'react';
import './App.css';
import './components/componentStyles.css'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';

import { Button, AppBar, Toolbar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ArrowDropDownCircleIcon from '@material-ui/icons/ArrowDropDownCircle';
import dropdown from './components/dropdown'
// Use Styles
const useStyles = makeStyles((theme) => ({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    background: 'transparent',
  },
  
}));

const Header = () => {
  const navigationLinks = {}
  const classes = useStyles();
  return (
    <Grid container>
      {/* <AppBar position='sticky' color='transparent' className={classes.root}> */}
        {/* <Toolbar> */}
          {/* <Router> */}

          <div className="navigation-bar">
            <ul>
              <li><NavLink to = '/' activeClassName="selected" exact> <AccountCircleIcon /> Profile </NavLink> </li> 
              <li><NavLink to = '/cart' activeClassName="selected">  <ShoppingCartIcon /> Orders</NavLink></li>
              <li><NavLink to = '/Billing' activeClassName="selected"> <ListAltIcon/> Billing</NavLink></li>
              {/* <li><NavLink to = '/me' activeClassName="selected">  Cafe Name <ArrowDropDownCircleIcon />  </NavLink></li> */}
              <li> <button onclick="myFunction()" className="dropbtn" id = "logout-btn">Logout <ExitToAppIcon /></button>
              
               </li>

            </ul>
          </div>

            {/* <Grid item xs={6} sm={3}>
              <Link to='/'>
                <Button color='black'>
                  <HomeIcon /> Home
                </Button>
              </Link>
            </Grid>

            <Grid item xs={6} sm={3}>
              <Link to='/Cart'>
                <Button color='black'>
                  <ShoppingCartIcon />
                  Cart
                </Button>
              </Link>
            </Grid>

            <Grid item xs={6} sm={3}>
              <Link to='/User'>
                <Button color='black'>
                  <AccountCircleIcon />
                  User
                </Button>
              </Link>
            </Grid>

            <Grid item xs={6} sm={3}>
              <Link to='/CheckOut'>
                <Button color='black'>
                  <ExitToAppIcon />
                  Check Out
                </Button>
              </Link>
            </Grid> */}

            {/* <Switch>
              <Route exact path='/'></Route>
              <Route path='/Cart'></Route>
              <Route path='/User'></Route>
              <Route path='/CheckOut'></Route>
            </Switch> */}

          {/* </Router> */}
        {/* </Toolbar> */}
      {/* </AppBar> */}
    </Grid>
  );
};

export default Header;
