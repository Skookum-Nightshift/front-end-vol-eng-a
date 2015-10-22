/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
import RaisedButton from 'material-ui/lib/raised-button';


class GreenButton extends React.Component {
  render(): ?ReactElement {

    var {children, type, ...props} = this.props;

    return (
      <RaisedButton {...props} />
    );
  }
}

GreenButton.propTypes = {
};

GreenButton.defaultProps = {
  label: 'Submit',
  primary: {true},
  labelColor: '#FFFFFF',
};

export default GreenButton;
