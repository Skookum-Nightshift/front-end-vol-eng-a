/** @flow */

require('./styles.css');

import React from 'react';
import { Router, Route, Link } from 'react-router'
var {PropTypes} = React;
import Navbar from 'Navbar';


class Header extends React.Component {
  render(): ?ReactElement {
    return (
      <header className="Header">
      	<img src="/public/images/uncc_logo2.png" />
        <Navbar />
      </header>
    );
  }
}

Header.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Header;
