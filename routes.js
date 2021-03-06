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
import Categories from './handlers/Categories';
import Home from'./handlers/Home';
import Opportunity from'./handlers/Opportunity';
import TakeQuiz from'./handlers/TakeQuiz';
import QuizResults from'./handlers/QuizResults';
import CategoryListing from './handlers/CategoryListing';
import ViewAllOrganizations from './handlers/ViewAllOrganizations';
import Organization from './handlers/Organization';

var routes = (
  <Route path="/" handler={App} >
    <DefaultRoute name="home" handler={Home} />
    <Route name="opportunity" path="opportunity/:id" handler={Opportunity}/>
    <Route name="categories" handler={Categories} />
    <Route name="category" path="category/:id" handler={CategoryListing} />
    <Route name="organizations" handler={ViewAllOrganizations} />
    <Route name="organization" path="organization/:id" handler={Organization} />
    <Route name="quiz" handler={TakeQuiz} />
    <Route name="results" handler={QuizResults} />
    <NotFoundRoute handler={NotFound} />
  </Route>
);

export default routes;
