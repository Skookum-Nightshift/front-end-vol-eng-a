/** @flow */
'use strict';

require('./styles.css');

import React from 'react';
import {RouteHandler} from 'react-router';
import injectTapEventPlugin  from "react-tap-event-plugin";
injectTapEventPlugin();
var {PropTypes} = React;

import Header from 'Header';
import Footer from 'Footer';

import UWCCtheme from './theme';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import ThemeDecorator from 'material-ui/lib/styles/theme-decorator';

@ThemeDecorator(ThemeManager.getMuiTheme(UWCCtheme))


class AppBase extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="AppBase">
      	<div className="PageWrap">
      		<Header id="header" />
        	<RouteHandler />
        </div>
        <Footer id="footer" />
      </div>
    );
  }
}

export default AppBase;
