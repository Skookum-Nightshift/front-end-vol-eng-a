/** @flow */

require('./styles.css');

import React from 'react';
import { Router, Route, Link } from 'react-router';
import { IconButton, IconMenu } from 'material-ui';
import MenuItem from 'material-ui/lib/menus/menu-item';
import HamburgerIcon from 'material-ui/lib/svg-icons/navigation/menu';

var {PropTypes} = React;

class MobileNav extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="MobileNav">
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

MobileNav.propTypes = {
  id: PropTypes.any.isRequired,
};

export default MobileNav;
