/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
import Jumbotron from 'Jumbotron';
import CategoryItem from 'CategoryItem';


class OpportunityPageContent extends React.Component {

  render(): ?ReactElement {

  	var opportunity = this.props.opportunity; 
    var opportunityTags = opportunity.tags;

    var tags = opportunityTags.sort().map(tag =>
        <CategoryItem data={tag} />
      );
    

    return (
      <div className="OpportunityPageContent">

      {this.props.location === 'top' ? 

      	<div id="ContentAboveConnect" className="clearfix">

            <Jumbotron image="/public/photos/DSC_1419_Extended.jpg" />
           
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

        <div className="OpportunityTags">
          {tags}
        </div>
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
