/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class OrganizationItem extends React.Component {
  render(): ?ReactElement {

    var {children, type, ...props} = this.props;

    return (
      <div className="OrganizationItem">
        <div className="comment-image">
          <img src={this.props.data.icon} width="75"/>
        </div>
        <div className="comment-content">
          <h1>{this.props.data.name}</h1>
          <p>{this.props.data.contact.address}</p>
          <p>{this.props.data.contact.city}, {this.props.data.contact.state} {this.props.data.contact.zip}</p>
          <p>{this.props.data.contact.web}</p>
        </div>
      </div>
    );
  }
}

OrganizationItem.propTypes = {
  id: PropTypes.any.isRequired,
};

export default OrganizationItem;
