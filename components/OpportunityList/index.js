/** @flow */

require('./styles.css');

import React from 'react';
import SingleMatch from 'SingleMatch';
import OpportunityItem from 'OpportunityItem';
var {PropTypes} = React;

class OpportunityList extends React.Component {
  render(): ?ReactElement {


    return (
      <div className="OpportunityList">
        <h2>OPPORTUNITIES</h2>
        {this.props.opportunities}
      </div>
    );
  }
}

OpportunityList.propTypes = {
  id: PropTypes.any.isRequired,
};

export default OpportunityList;
