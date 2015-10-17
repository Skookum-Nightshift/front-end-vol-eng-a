/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';
import Jumbotron from 'Jumbotron';

class NotFound extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="NotFound">
        <Jumbotron header="Page Not Found" />
        <RouteHandler />
      </div>
    );
  }
}

export default NotFound;
