import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './component/Home';
import Playquiz from './component/Playquiz';
import Error from './component/Error';

export default function() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/playquiz" component={Playquiz} />
      <Route component={Error} />
    </Switch>
  );
}
