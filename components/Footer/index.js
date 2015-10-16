/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Footer extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Footer">
        Footer
      </div>
    );
  }
}

Footer.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Footer;
