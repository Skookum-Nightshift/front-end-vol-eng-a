/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Footer extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Footer">
        <div className="credits">
      		<img src="/public/images/apollo.png" width="150" /><br/>
        	UWaspires is a <a href="http://nightshiftc.lt" target="_blank">Nightshift</a> Project by Team Apollo.
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Footer;
