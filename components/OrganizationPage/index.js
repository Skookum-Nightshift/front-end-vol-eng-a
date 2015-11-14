/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class OrganizationPage extends React.Component {
  render(): ?ReactElement {

    var organization = this.props.data;

  

    return (
      <div className="OrganizationPage">
        <h2>{organization.name}</h2>
        
      </div>
    );
  }
}

OrganizationPage.propTypes = {
  id: PropTypes.any.isRequired,
};

export default OrganizationPage;
