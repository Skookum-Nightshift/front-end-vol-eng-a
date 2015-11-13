/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Footer extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Footer">
        <div className="credits">
      		<img src="/public/images/uncc_logo2.png" />
          <p>
        	  301 S Brevard Street, Charlotte, NC 28202 <br/> 
            704.372.7170 | info@uwcentralcarolinas.org
          </p>
        </div>
      </div>
    );
  }
}

Footer.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Footer;
