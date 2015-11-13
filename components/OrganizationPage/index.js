/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class OrganizationPage extends React.Component {
  render(): ?ReactElement {

    var {children, type, ...props} = this.props;
    return (
      <div className="OrganizationPage">
        <h2>{this.props.data.name}</h2>

      </div>
    );
  }
}

OrganizationPage.propTypes = {
  id: PropTypes.any.isRequired,
};

export default OrganizationPage;
