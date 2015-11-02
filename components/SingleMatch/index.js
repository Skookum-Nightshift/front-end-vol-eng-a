/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class SingleMatch extends React.Component {
  render(): ?ReactElement {

  var {children, type, ...props} = this.props;

    return (
      <div className="SingleMatch"> 
	      <div> 
	      	<img src={this.props.data.logo} width="75"/>
	        <h3>{this.props.data.name}</h3>
	      </div>
	      <p> {this.props.data.opportunityName} </p>
	      <p>{this.props.data.opportunityDescription}</p>
      </div>
    );
  }
}

SingleMatch.propTypes = {
  id: PropTypes.any.isRequired,
};

export default SingleMatch;
