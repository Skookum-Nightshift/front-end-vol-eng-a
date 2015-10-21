/** @flow */

require('./styles.css');

import React from 'react';
import { Router, Route, Link } from 'react-router';
import FlatButton from 'material-ui/lib/flat-button';




var {PropTypes} = React;

class Navbar extends React.Component {
  render(): ?ReactElement {
    return (
       <div className="Navbar">
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
    );
  }
}

Navbar.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Navbar;
