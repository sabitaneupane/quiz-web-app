import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Playquiz from './component/Playquiz';
import Notfound from './utils/Notfound';

export default function() {
  return (
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/playquiz" component={Playquiz} />
      <Route component={Notfound} />
    </Switch>
  );
}
