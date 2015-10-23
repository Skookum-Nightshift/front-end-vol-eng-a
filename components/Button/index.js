/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
import RaisedButton from 'material-ui/lib/raised-button';


class Button extends React.Component {
  render(): ?ReactElement {

    var {children, type, ...props} = this.props;

    return (
      <RaisedButton {...props} />
    );
  }
}

Button.propTypes = {
};

Button.defaultProps = {
  label: 'Submit',
  backgroundColor: '#BDBDBD',
  labelColor: '#FFFFFF',
};

export default Button;
