/** @flow */

require('./styles.css');

import React from 'react';
import { Router, Route, Link } from 'react-router';
import { FlatButton, IconButton, IconMenu } from 'material-ui';
import MenuItem from 'material-ui/lib/menus/menu-item';
import HamburgerIcon from 'material-ui/lib/svg-icons/navigation/menu';

var {PropTypes} = React;

class Navbar extends React.Component {

  render(): ?ReactElement {

    return (
      <div className="Navbar">
       <IconMenu desktop={true} className="IconMenu" iconButtonElement={ <IconButton><HamburgerIcon /></IconButton> } >
        <MenuItem primaryText="Home" linkButton={true} href="/" />
        <MenuItem primaryText="Take the Quiz" linkButton={true} href="/quiz" />
        <MenuItem primaryText="All Categories" linkButton={true} href="/categories" />
        <MenuItem primaryText="View Organizations" linkButton={true} href="/organizations" />
        <MenuItem primaryText="About UWCCaspwires" linkButton={true} href="/about" />
        <MenuItem primaryText="My Profile" linkButton={true} href="/profile" />


      </IconMenu>
    </div>
    );
  }
}

Navbar.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Navbar;
