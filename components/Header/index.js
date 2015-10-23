/** @flow */

require('./styles.css');

import React from 'react';
import { Router, Route, Link } from 'react-router';
var {PropTypes} = React;
import AppBar from 'material-ui/lib/app-bar';
import Navbar from 'Navbar';

class Header extends React.Component {

  render(): ?ReactElement {
    return (
		    <div className="Header">
		      <AppBar
		      	className="AppBar"
					  title="UWCCaspires"
					  showMenuIconButton="false"
					  iconElementRight={ <Navbar /> } />
		    </div>
    );
  }
}

Header.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Header;
