import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Page Components
import TableArea from './pages/TableArea';
import Home from '../src/pages/Home';
import CheckOut from './pages/CheckOut';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/cart'>
          <TableArea />
        </Route>
        <Route path='/user'></Route>
        <Route path='/checkout'>
          {' '}
          <CheckOut />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
