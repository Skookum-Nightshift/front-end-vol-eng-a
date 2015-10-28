/** @flow */
import React from 'react';
import Router from 'react-router';

const {
  DefaultRoute,
  Route,
  NotFoundRoute,
} = Router;

import NotFound from './handlers/NotFound';
import App from './handlers/Base';
import Home from'./handlers/Home';
import TakeQuiz from'./handlers/TakeQuiz';
import Categories from './handlers/Categories';

var routes = (
  <Route path="/" handler={App} >
    <DefaultRoute name="home" handler={Home} />
    <Route name="quiz" handler={TakeQuiz} />
    <Route name="Categories" handler={Categories} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

export default routes;
