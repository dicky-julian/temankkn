import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

// local
import App from './App';
import Router from './router'
import './assets/styles/index.css'
import './assets/styles/responsive.css'
import './assets/scripts/index.js'

render(
  <BrowserRouter>
    <Router />
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
