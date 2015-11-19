/** @flow */

require('./styles.css');

import React from 'react';
import { Router, Route, Link } from 'react-router'
var {PropTypes} = React;
import Jumbotron from 'Jumbotron';
import OpportunityItem from 'OpportunityItem';

class OrganizationPage extends React.Component {

  render(): ?ReactElement {

    var organization = this.props.organization;
    var addy = <p>{organization.address}, {organization.city}, {organization.state} {organization.zip}</p>;
    var opps = organization.opportunities.map(opp =>
        <OpportunityItem data={opp} key={opp.id} />
    );

    return (
      <div className="OrganizationPage">

      {this.props.location === 'top' ?

        <div id="ContentAboveConnect" className="clearfix">

            <Jumbotron image="/public/images/DSC_1419_Extended.jpg" />

            <div id="HeaderInfo" className="HeaderInfo">
             <div className="LogoWrapper">
                <img className="Logo" src={organization.logo} width="150" /> 
              </div>
              <h1>{organization.name}</h1>
              <p>{organization.address ? addy : "Locations Vary"}</p>
              <p>{organization.description}</p>
            </div>
        </div>
      :

      <div id="ContentBelowConnect">
       <h2>Volunteer Opportunities</h2>
        {opps}

      </div>
    }


      </div>
    );
  }
}

OrganizationPage.propTypes = {
  id: PropTypes.any.isRequired,
};

export default OrganizationPage;
