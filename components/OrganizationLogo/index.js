/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class OrganizationLogo extends React.Component {
  render(): ?ReactElement {
  	var wrapperSize = parseInt(this.props.width) + 25;
    return (
      <div className="LogoWrapper" style={{ width: wrapperSize, height: wrapperSize }}>
        <span className="helper"></span>
        <img className="Logo" src={this.props.logo} width={this.props.width} />
      </div>
    );
  }
}

OrganizationLogo.propTypes = {
  id: PropTypes.any.isRequired,
};

OrganizationLogo.defaultProps = {
  width: 150,
  logo: 'public/icons/noun_29964_cc.svg',
};

export default OrganizationLogo;
