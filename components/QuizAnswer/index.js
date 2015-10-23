/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class QuizAnswer extends React.Component {
  render(): ?ReactElement {
    return <Button onClick={this.handleSelected}>{this.props.text}</Button>;
  }
}

QuizAnswer.propTypes = {
  id: PropTypes.any.isRequired,
};

export default QuizAnswer;
