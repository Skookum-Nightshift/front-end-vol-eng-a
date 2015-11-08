/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;


class OpportunityPageContent extends React.Component {


  render(): ?ReactElement {

  	var opportunity = this.props.opportunity; 

    return (
      <div className="OpportunityPageContent">
      		<img className="HeaderImage" src="/public/uwcc/2-0001.jpg" />

        	<div className="HeaderInfo">
        		<img className="Logo" src="/public/logos/bbbs.jpg" width="200" /> 

          	<h1>{opportunity.name}</h1>
          	<h2>{opportunity.organization.name}</h2>
          	<p>{opportunity.address}</p>

          </div>

          <p>
            	{opportunity.description}
          </p>

        	
      </div>
    );
  }
}

OpportunityPageContent.propTypes = {
  id: PropTypes.any.isRequired,
};

export default OpportunityPageContent;
