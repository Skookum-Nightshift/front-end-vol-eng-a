/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';
var {PropTypes} = React;
import Header from 'Header';
import Footer from 'Footer';

import UWCCtheme from './theme';
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const ThemeDecorator = require('material-ui/lib/styles/theme-decorator');

@ThemeDecorator(ThemeManager.getMuiTheme(UWCCtheme))

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
