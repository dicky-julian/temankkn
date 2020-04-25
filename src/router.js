import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Pages Import
import Home from './pages/Home';
import Permasalahan from './pages/Permasalahan';
import SinglePermasalahan from './pages/Single-Permasalahan';
import FormPermasalahan from './pages/Form-Permasalahan';
import Error404 from './pages/404';

class Router extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 0,
      components: {
        homePage: Home
      }
    }
  }

  render() {
    const components = this.state.components;

    return (
      <Switch>
        <Route exact path="/" component={components.homePage} />
        <Route exact path="/permasalahan" component={Permasalahan} />
        <Route exact path="/permasalahan/id" component={SinglePermasalahan} />
        <Route exact path="/permasalahan/add" component={FormPermasalahan} />
        <Route path="*" component={Error404} />
    </Switch>
    );
  }
}

export default Router;