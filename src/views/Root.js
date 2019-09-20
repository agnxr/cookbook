import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Desserts from 'views/Desserts';
import Dinners from 'views/Dinners';
import Drinks from 'views/Drinks';

const App = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Desserts} />
        <Route path="/dinners" component={Dinners} />
        <Route path="/drinks" component={Drinks} />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default App;
