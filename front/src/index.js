import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import {AuthRouter} from './router/auth'

ReactDOM.render(
  <Router>
    <AuthRouter />
  </Router>,
  document.getElementById('root')
);