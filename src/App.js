import './App.css';
import { Grid } from '@material-ui/core';
import Header from './Header';

function App() {
  return (
    <Grid container direction='column'>
      <Header />

      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
          Content Content Content Content Content Content Content Content
          Content Content Content Content Content Content Content Content
          Content Content Content Content Content Content Content Content
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
