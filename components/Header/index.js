/** @flow */

require('./styles.css');

import React from 'react';
import { Router, Route, Link } from 'react-router';
var {PropTypes} = React;
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/src/styles/colors';

class Header extends React.Component {

  render(): ?ReactElement {

    return (
			<div className="Header">    	
		  <AppBar
		  	style={{
			    background: '#D9D9D9',
			  }}
			  title="UWCCaspires"
			  showMenuIconButton="false"
			  iconElementRight={ 
			  	<div>
			  		<FlatButton label="Take the Quiz" linkButton="true" containerElement={<Link to="/quiz"/>} /> 
			  		<FlatButton label="View Categories" linkButton="true" containerElement={<Link to="/categories"/>} /> 
			  		<FlatButton label="All Organizations"  linkButton="true" containerElement={<Link to="/organizations"/>} /> 
			  		<FlatButton label="My Account"  linkButton="true" containerElement={<Link to="/account"/>} /> 
			  	</div> 
			  }  />
      </div> 
    );
  }
}

Header.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Header;
