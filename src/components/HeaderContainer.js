import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import bg from '../Assets/bg.png'

import './componentStyles.css'
import { Button, AppBar, Toolbar, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// Use Styles
const useStyles = makeStyles((theme) => ({
  h1: {
    backgroundColor: '#e0e0'
  },
}));

const HeaderContainer = (props) => {
  const classes = useStyles();
  console.log(props)
  return (
    <div className="header-container">
      <Container maxWidth="lg">
      <h1>{props.page}</h1>
        {/* <img src={bg} alt=""/> */}
      </Container>
    </div>
  );
};

export default HeaderContainer;
