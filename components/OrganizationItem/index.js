/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
import {Paper} from 'material-ui';
import {Card} from 'material-ui/lib/card'

class OrganizationItem extends React.Component {
  render(): ?ReactElement {

    var {children, type, ...props} = this.props;

    return (
      <div className="OrganizationItem">
        <Card>
          <div className="comment-image">
            <img src={this.props.data.icon} width="75"/>
          </div>
          <div className="comment-content">
            <h1>{this.props.data.name}</h1>
            <p>{this.props.data.address}</p>
            <p>{this.props.data.city}, {this.props.data.state} {this.props.data.zip}</p>
            <p>{this.props.data.web}</p>
          </div>
        </Card>
      </div>
    );
  }
}

OrganizationItem.propTypes = {
  id: PropTypes.any.isRequired,
};

export default OrganizationItem;
