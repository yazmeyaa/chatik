import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import {  createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
body{
  margin: 0px;
  padding: 0px;
}
`
ReactDOM.render(
  <Router>
    <GlobalStyle />
    <App />
  </Router>,
  document.getElementById('root')
);