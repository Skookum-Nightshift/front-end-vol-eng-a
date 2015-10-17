/** @flow */

require('./styles.css');

import React from 'react';
import { Router, Route, Link } from 'react-router';
var {PropTypes} = React;
import Navbar from 'Navbar';


class Header extends React.Component {
  render(): ?ReactElement {
    return (
    	<nav>
		    <div className="Header nav-wrapper">
		      <a href="#" className="brand-logo"><img src="/public/images/uncc_logo2.png" /></a>
		      <ul id="nav-mobile" class="right hide-on-med-and-down">
		      	<Navbar />
		      </ul>
		    </div>
		  </nav>
    );
  }
}

Header.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Header;
