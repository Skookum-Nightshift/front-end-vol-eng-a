/** @flow */

require('./styles.css');

import React from 'react';
import { Router, Route, Link } from 'react-router';

var {PropTypes} = React;

class Navbar extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quiz">Take the Quiz</Link></li>
        <li><Link to="/categories">Categories</Link></li>
        <li><Link to="/organizations">Organizations</Link></li>
        <li><Link to="/account">My Account</Link></li>
      </div>
    );
  }
}

Navbar.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Navbar;
