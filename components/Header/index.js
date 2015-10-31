/** @flow */

require('./styles.css');

import React from 'react';
import { Router, Route, Link } from 'react-router';
var {PropTypes} = React;
import AppBar from 'material-ui/lib/app-bar';
import EnhancedButton from 'material-ui/lib/enhanced-button';
import Navbar from 'Navbar';

class Header extends React.Component {

  render(): ?ReactElement {

  	var NavTitle = (
  			<EnhancedButton className="NavTitle" linkButton={true} href="/" style={{fontSize: 34, paddingTop: 8, color: '#FFFFFF' }}>
        	<strong>UWCC</strong>aspires
      </EnhancedButton>
  	);

    return (
		    <div className="Header">
		      <AppBar
		      	className="AppBar"
					  title={NavTitle}
					  showMenuIconButton={false}
					  iconElementRight={ <Navbar /> } />
				</div>
    );
  }
}

Header.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Header;
