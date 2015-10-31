/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class OrganizationItem extends React.Component {
  render(): ?ReactElement {

    var {children, type, ...props} = this.props;

    return (
      <div className="OrganizationItem">
        <img src={this.props.data.icon} width="75"/>
        <h3>{this.props.data.name}</h3>
        <h4>{this.props.data.contact.address}</h4>
        <h4>{this.props.data.contact.city}</h4>
        <h4>{this.props.data.contact.state}</h4>
        <h4>{this.props.data.contact.zip}</h4>
        <h4>{this.props.data.contact.web}</h4>
      </div>
    );
  }
}

OrganizationItem.propTypes = {
  id: PropTypes.any.isRequired,
};

export default OrganizationItem;
