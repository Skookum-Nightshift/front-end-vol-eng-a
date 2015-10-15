/** @flow */

require('./styles.css');

import React from 'react';
import { Router, Route, Link } from 'react-router'

var {PropTypes} = React;

class Navbar extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Navbar">
        <Link to="/">Home</Link>
      </div>
    );
  }
}

Navbar.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Navbar;
