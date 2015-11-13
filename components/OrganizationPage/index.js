/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class OrganizationPage extends React.Component {
  render(): ?ReactElement {

    var organization = this.props.organization;

    var opportunitites = organization.opportunitites.map(opp =>
        {opp.name}
      );

    return (
      <div className="OrganizationPage">
        <h2>{this.props.data.name}</h2>
        <h4>{opportunitites}</h4>
      </div>
    );
  }
}

OrganizationPage.propTypes = {
  id: PropTypes.any.isRequired,
};

export default OrganizationPage;
