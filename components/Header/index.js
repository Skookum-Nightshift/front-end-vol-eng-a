/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
import Navbar from 'Navbar';


class Header extends React.Component {
  render(): ?ReactElement {
    return (
      <header className="Header">
        <Navbar />
      </header>
    );
  }
}

Header.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Header;
