/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
import RaisedButton from 'material-ui/lib/raised-button';


class BlueButton extends React.Component {
  render(): ?ReactElement {

    var {children, type, ...props} = this.props;

    return (
      <RaisedButton {...props} />
    );
  }
}

BlueButton.propTypes = {
};

BlueButton.defaultProps = {
  label: 'Submit',
  secondary: {true},
  labelColor: '#FFFFFF',
};

export default BlueButton;
