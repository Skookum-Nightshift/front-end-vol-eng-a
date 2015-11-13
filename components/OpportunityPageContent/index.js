/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
import Jumbotron from 'Jumbotron';


class OpportunityPageContent extends React.Component {

  render(): ?ReactElement {

  	var opportunity = this.props.opportunity; 

    var tags = opportunity.tags.map(tag =>
        {tag.name}
      );
    

    return (
      <div className="OpportunityPageContent">

      {this.props.location === 'top' ? 

      	<div id="ContentAboveConnect" className="clearfix">

            <Jumbotron image="/public/uwcc/2-0001.jpg" />
           
	        	<div id="HeaderInfo" className="HeaderInfo">
            
	        		<div className="LogoWrapper">
	        			<img className="Logo" src="/public/logos/bbbs.jpg" width="150" /> 
	        		</div>
	          	<h1>{opportunity.name}</h1>
	          	<h2>{opportunity.organization.name}</h2>
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