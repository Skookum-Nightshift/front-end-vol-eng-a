/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class OrganizationPage extends React.Component {


  render(): ?ReactElement {

    var org = this.props.data;

    return (
      <div className="OrganizationPage">
      <h2>{org.name}</h2>
      <h2>{org.city}</h2>
      </div>
    );
  }
}

OrganizationPage.propTypes = {
  id: PropTypes.any.isRequired,
};

export default OrganizationPage;
