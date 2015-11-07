/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class OpportunityPageContent extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="OpportunityPageContent">
        	<img className="HeaderImage" src= {this.props.content.headerImg} />

        	<div className="HeaderInfo">
        		<img className="Logo" src={this.props.content.logo} align="left" width="200" /> 

          	<h1>{this.props.content.oppName}</h1>
          	<h2>{this.props.content.orgName}</h2>
          	<p>{this.props.content.address}</p>
          </div>
          <p>
            {this.props.content.paragraph}
          </p>
      </div>
    );
  }
}

OpportunityPageContent.propTypes = {
  id: PropTypes.any.isRequired,
};

export default OpportunityPageContent;
