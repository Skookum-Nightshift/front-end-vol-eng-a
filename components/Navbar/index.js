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
        <Link to="/quiz">Take the Quiz</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/organizations">Organizations</Link>
        <Link to="/account">My Account</Link>
      </div>
    );
  }
}

Navbar.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Navbar;
