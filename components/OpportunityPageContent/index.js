/** @flow */

require('./styles.css');

import React from 'react';
import { Router, Route, Link } from 'react-router'
var {PropTypes} = React;
import Jumbotron from 'Jumbotron';


class OpportunityPageContent extends React.Component {

  render(): ?ReactElement {

  	var opportunity = this.props.opportunity; 
    

    return (
      <div className="OpportunityPageContent">

      {this.props.location === 'top' ? 

      	<div id="ContentAboveConnect" className="clearfix">

            <Jumbotron image="/public/images/DSC_1419_Extended.jpg" />
           
	        	<div id="HeaderInfo" className="HeaderInfo">
              <div className="LogoWrapper">
                <img className="Logo" src={`/public/logos/${opportunity.organization.logo}`} width="150" /> 
              </div>
	          	<h1>{opportunity.name}</h1>
	          	<h2><Link to={`/organization/${opportunity.organization.organization_id}`}>{opportunity.organization.name}</Link></h2>
	          	<p>{opportunity.address ? opportunity.address : "Locations Vary"}</p>
          	</div>
        </div>
      : 

      <div id="ContentBelowConnect">
      	<p>{opportunity.description}</p>

    
      </div>
    }

        	
      </div>
    );
  }
}

OpportunityPageContent.propTypes = {
  id: PropTypes.any.isRequired,
};

export default OpportunityPageContent;
