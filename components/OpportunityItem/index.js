/** @flow */

require('./styles.css');

import React from 'react';

import {Paper} from 'material-ui';
import {Card} from 'material-ui/lib/card';
import {CardActions} from 'material-ui/lib/card';import { Router, Route, Link } from 'react-router'

var {PropTypes} = React;

class OpportunityItem extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="OpportunityItem">
        <Card>
          <div className="comment-image">
          </div>
          <div className="comment-content">
            <h1><Link to={`/opportunity/${this.props.data.id}`}>{this.props.data.name}</Link></h1>
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
