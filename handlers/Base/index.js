/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';
import Header from 'Header';
import Footer from 'Footer';


class AppBase extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="AppBase">
      	<Header />
      	<RouteHandler />
        <Footer />
      </div>
    );
  }
}

export default AppBase;
