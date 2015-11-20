/** @flow */

require('./styles.css');

import React from 'react';
import { Router, Route, Link } from 'react-router'
var {PropTypes} = React;
import Jumbotron from 'Jumbotron';
import OpportunityItem from 'OpportunityItem';
import Logo from 'OrganizationLogo';
import UserStore from '../../stores/UserStore';

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

              <Logo logo={organization.logo} />
            
              <h1>{organization.name}</h1>
              <p>{organization.address ? addy : "Locations Vary"}</p>
              <p>{organization.description}</p>

              {this.props.connection && organization.web ? <a className="SocialLinks" href={organization.web} target="_blank">Website</a> : null }
              {this.props.connection && organization.facebook ? <a className="SocialLinks" href={organization.facebook} target="_blank">Facebook</a> : null }
              {this.props.connection && organization.twitter ? <a className="SocialLinks" href={organization.twitter} target="_blank">Twitter</a> : null }
              {this.props.connection && organization.instagram ? <a className="SocialLinks" href={organization.instagram} target="_blank">Instagram</a> : null }
              {this.props.connection && organization.youtube ? <a className="SocialLinks" href={organization.youtube} target="_blank">Youtube</a> : null }
              {this.props.connection && organization.linkedin ? <a className="SocialLinks" href={organization.linkedin} target="_blank">LinkedIn</a> : null }

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
