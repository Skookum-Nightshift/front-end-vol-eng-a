/** @flow */

require('./styles.css');

import React from 'react';
import { Router, Route, Link } from 'react-router';
import {Card} from 'material-ui/lib/card';
import {CardActions} from 'material-ui/lib/card';
import Logo from 'OrganizationLogo';

var {PropTypes} = React;

class OpportunityItem extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="OpportunityItem">
        <Card className="Card">
          <div className="comment-content">
            <h3><Link to={`/opportunity/${this.props.data.id}`}>{this.props.data.name}</Link></h3>
            <p>{this.props.data.description}</p>
          </div>
        </Card>
      </div>
    );
  }
}

OpportunityItem.propTypes = {
  id: PropTypes.any.isRequired,
};

export default OpportunityItem;
