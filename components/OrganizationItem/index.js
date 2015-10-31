/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class OrganizationItem extends React.Component {
  render(): ?ReactElement {

    var {children, type, ...props} = this.props;

    return (
      <div className="OrganizationItem">
        <h3>{this.props.data.name}</h3>
      </div>
    );
  }
}

OrganizationItem.propTypes = {
  id: PropTypes.any.isRequired,
};

export default OrganizationItem;
