/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
import { Router, Route, Link } from 'react-router'


class OrganizationItem extends React.Component {
  render(): ?ReactElement {

    var {children, type, ...props} = this.props;


    return (
      <div className="OrganizationItem">
        <div className="comment-image">
          <img src={this.props.data.icon} width="75"/>
        </div>
        <div className="comment-content">
          <h1><Link to={`/organizations/${this.props.data.organization_id}`}>{this.props.data.name}</Link></h1>
          <p>{this.props.data.address}</p>
          <p>{this.props.data.city}, {this.props.data.state} {this.props.data.zip}</p>
          <p>{this.props.data.web}</p>
        </div>
      </div>
    );
  }
}

OrganizationItem.propTypes = {
  id: PropTypes.any.isRequired,
};

export default OrganizationItem;
