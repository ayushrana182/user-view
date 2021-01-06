import React from 'react';

import { Button, AppBar, Toolbar, Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

// Use Styles
const useStyles = makeStyles((theme) => ({
  root: {
    //  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 70%)',
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Grid container justify='space-evenly'>
        <AppBar position='sticky' color='transparent' className={classes.root}>
          <Toolbar>
            <Grid item xs={6} sm={3}>
              <NavLink to='/'>
                <Button color='default'>
                  <HomeIcon /> Home
                </Button>
              </NavLink>
            </Grid>
            <Grid item xs={6} sm={3}>
              <NavLink to='/cart'>
                <Button color='default'>
                  <ShoppingCartIcon />
                  Cart
                </Button>
              </NavLink>
            </Grid>
            <Grid item xs={6} sm={3}>
              <NavLink to='/user'>
                <Button color='default'>
                  <AccountCircleIcon />
                  User
                </Button>
              </NavLink>
            </Grid>
            <Grid item xs={6} sm={3}>
              <NavLink to='/checkout'>
                <Button color='default'>
                  <ExitToAppIcon />
                  Check Out
                </Button>
              </NavLink>
            </Grid>
          </Toolbar>
        </AppBar>
      </Grid>
    </>
  );
};

export default Header;
