/** @flow */

require('./styles.css');

import React from 'react';
import Jumbotron from 'Jumbotron';
import OpportunityList from 'OpportunityList';
var {PropTypes} = React;

class OrganizationPage extends React.Component {


  render(): ?ReactElement {

    var org = this.props.data;

    return (
      <div className="OrganizationPage">
        <Jumbotron image="/public/photos/DSC_1419_Extended.jpg" />
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
