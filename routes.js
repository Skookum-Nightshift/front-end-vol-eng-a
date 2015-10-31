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
import quizresults from'./handlers/quizresults';

var routes = (
  <Route path="/" handler={App} >
    <DefaultRoute name="home" handler={Home} />
    <Route name="about" handler={NotFound} />
    <Route name="categories" handler={NotFound} />
    <Route name="organizations" handler={NotFound} />
    <Route name="profile" handler={NotFound} />
    <Route name="quiz" handler={TakeQuiz} />
    <Route name="quizresults" handler={quizresults} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

export default routes;
