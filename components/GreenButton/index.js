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
  style: {margin: '10px 12%', minWidth: '75%', textAlign: 'center'}
};

export default GreenButton;
