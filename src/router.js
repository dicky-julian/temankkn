import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { session } from './config';

// Pages Import
import Home from './pages/Home';
import Permasalahan from './pages/Permasalahan';
import SinglePermasalahan from './pages/Single-Permasalahan';
import FormPermasalahan from './pages/Form-Permasalahan';
import Notification from './pages/Notification';
import Error404 from './pages/404';

class Router extends Component {

  render() {
    return (
      <div>
        {session !== null ?
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/permasalahan" component={Permasalahan} />
            <Route exact path="/permasalahan/id" component={SinglePermasalahan} />
            <Route exact path="/permasalahan/add" component={FormPermasalahan} />
            <Route exact path="/notification" component={Notification} />
            <Route path="*" component={Error404} />
          </Switch>
          :
          <Switch>
            <Route path="*" component={Home} />
          </Switch>
        }
      </div>
    );
  }
}

export default Router;