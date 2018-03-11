import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'normalize.css';
import './App.css';

import Home from './scenes/Home';
import Fryderyk from './scenes/Fryderyk';
import RMVP from './scenes/RMVP';
import N42CMS from './scenes/N42CMS';
import CommaOil from './scenes/CommaOil';
import ArtsRepublic from './scenes/ArtsRepublic';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/fryderyk" component={Fryderyk} />
      <Route path="/arts-republic" component={ArtsRepublic} />
      <Route path="/rmvp" component={RMVP} />
      <Route path="/comma-oil" component={CommaOil} />
      <Route path="/n42-cms" component={N42CMS} />
    </Switch>
  </Router>
);

export default App;
