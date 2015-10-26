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
       <div className="hidden-mobile">
          <FlatButton 
          	label="Take the Quiz"
          	linkButton={true}
          	containerElement={ <Link to="quiz" /> } />

          <FlatButton 
          	label="All Categories"
          	linkButton={true}  />

          <FlatButton 
          	label="All Organizations"
          	linkButton={true} />

          <FlatButton 
          	label="My Account"
          	linkButton={true} />
       </div>
       <div className="hidden-desktop">
       <IconMenu iconButtonElement={ <IconButton><HamburgerIcon /></IconButton> } >
          <MenuItem primaryText="Refresh" />
          <MenuItem primaryText="Help" />
          <MenuItem primaryText="Sign out" />
        </IconMenu>
       </div>
    </div>
    );
  }
}

Navbar.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Navbar;
