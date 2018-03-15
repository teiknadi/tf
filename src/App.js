import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'normalize.css';
import './App.css';

import * as ROUTES from './routes'

import Header from './components/Header';
import Home from './scenes/Home';
import Fryderyk from './scenes/Fryderyk';
import RMVP from './scenes/RMVP';
import N42CMS from './scenes/N42CMS';
import CommaOil from './scenes/CommaOil';
import ArtsRepublic from './scenes/ArtsRepublic';

const App = () => (
  <Router>
    <Switch>
      <Route exact path={ROUTES.HOME} render={() => (
        <Fragment>
          <Header/>
          <Home/>
        </Fragment>
      )} />
      <Route exact path={ROUTES.HOME} component={Home} />
      <Route path={ROUTES.FRYDERYK} component={Fryderyk} />
      <Route path={ROUTES.ARTS_REPUBLIC} component={ArtsRepublic} />
      <Route path={ROUTES.RMVP} component={RMVP} />
      <Route path={ROUTES.COMMA_OIL} component={CommaOil} />
      <Route path={ROUTES.N42_CMS} component={N42CMS} />
    </Switch>
  </Router>
);

export default App;
