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

    var navBarLinkData = [
      {label : "Take the Quiz", route : "quiz" },
      {label : "All Categories", route : "quiz" },
      {label : "All Organizations", route : "quiz" },
      {label : "My Account", route : "quiz" },
    ];

    var NavbarLinksDesktop = this.navBarLinkData.map(function (link) {
      return (
        <FlatButton 
            label={link.label}
            linkButton={true}
            containerElement={ <Link to={link.route} /> } />
      );
    });

  

    return (
      <div className="Navbar">
       <div className="hidden-mobile">
          <NavbarLinksDesktop />
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
