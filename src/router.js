import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages Import
import Home from './pages/Home';
import Permasalahan from './pages/Permasalahan';
import SinglePermasalahan from './pages/Single-Permasalahan';
import FormPermasalahan from './pages/Form-Permasalahan';
import Error404 from './pages/404';

export default function router() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/permasalahan" component={Permasalahan} />
      <Route exact path="/permasalahan/id" component={SinglePermasalahan} />
      <Route exact path="/permasalahan/add" component={FormPermasalahan} />
      <Route path="*" component={Error404} />
  </Switch>
  );
}