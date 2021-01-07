import React from 'react';
import './componentStyles.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  },
}));
// const classes = useStyles();

const Footer = () => {
  return (
    <React.Fragment>
<Grid container spacing = {5} className = "restro-footer" >
<Grid item xs={12} md={6} container justify = "space-between" className = "Footer-cols">
  <Grid item sm = {6} xs={12} container>
    <Grid item xs = {6} >
      <h6>Company</h6>
        <ul>
          {/* <Link to "/fromFooter" >About Us</Link> */}
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Blogs</li>
          <li>FAQ</li>
        </ul>
    </Grid>
    <Grid item xs = {6} >
      <h6>Information</h6>
        <ul>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
          <li>Anti Spam Policy</li>
        </ul>
    </Grid>
  </Grid>
  <Grid item sm = {6} xs ={12} container>
    <Grid item xs = {6} >
      <h6>Special Pages</h6>
        <ul>
          <li>Become our Partner</li>
          <li>Careers</li>
          <li>Refer and Earn</li>
        </ul>
    </Grid>
    <Grid item xs = {6} >
      <h6>Customer Care</h6>
        <ul>
          <li>Support@restroapp.com</li>
          <li>Viber/WhatsApp 981234567</li>
          <li>Phone 01-412345</li>
        </ul>
    </Grid>
  </Grid>
</Grid>
<Grid item xs={12} md={6} container justify = "center" className = "Subscribe-col">
<h6>Subscribe to restroapp via email</h6>

  <Grid item xs = {10}container justify = "flex-end"  >
<p> Excepteur sint occaecat cupidatat non proident </p>

    <form noValidate autoComplete="off">
      
    <Grid container spacing = {3}>
      <TextField id="outlined-basic" label="e-mail Address" variant="outlined" />
      <Button size="large"
          variant="contained"
          color="primary"
          // className={classes.button}
          endIcon={<EmailIcon />}
          >
          SUBSCRIBE
        </Button>
    </Grid>

    </form>
  </Grid>
  <Grid item xs = {2}>© Restro app 2021</Grid>
</Grid>
</Grid>
     
  </React.Fragment>
  );
};

export default Footer;
