/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
import OrganizationItem from 'OrganizationItem';

class OrganizationList extends React.Component {

  render(): ?ReactElement {
    var {children, type, ...props} = this.props;

    return (
      <div className="OrganizationList">
        {this.props.organizations}
      </div>
    );
  }
}

OrganizationList.propTypes = {
  id: PropTypes.any.isRequired,
};

export default OrganizationList;
