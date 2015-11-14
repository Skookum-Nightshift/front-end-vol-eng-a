/** @flow */

require('./styles.css');

import React from 'react';

import {Paper} from 'material-ui';
import {Card} from 'material-ui/lib/card';
import {CardActions} from 'material-ui/lib/card';import { Router, Route, Link } from 'react-router'


var {PropTypes} = React;


class SingleMatch extends React.Component {

  render(): ?ReactElement {

    return (
      <div className="SingleMatch">
          <Card>
           <div className="comment-image">
            <img src={this.props.data.icon} width="75"/>
          </div>
          <div className="comment-content">
            <h1><Link to={`/opportunity/${this.props.data.opportunity_id}`}>{this.props.data.name}</Link></h1>
            <p><strong>{this.props.data.organization.name}</strong></p>
            <p>{this.props.data.description}</p>
          </div>
          </Card>
        </div>
    );
  }
}

SingleMatch.propTypes = {
  id: PropTypes.any.isRequired,
};

export default SingleMatch;
