/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class QuizNumber extends React.Component {

  render(): ?ReactElement {

    return (
      <div className="QuizNumber">
      	Question {this.props.id} of {this.props.remaining}
      </div>
    );
  }
}

QuizNumber.propTypes = {
  id: PropTypes.any.isRequired,
  remaining: PropTypes.any.isRequired,
};

export default QuizNumber;
