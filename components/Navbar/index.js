/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Navbar extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Navbar">
        Navbar
      </div>
    );
  }
}

Navbar.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Navbar;
