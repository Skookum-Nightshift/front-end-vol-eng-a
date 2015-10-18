/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class QuizAnswer extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="QuizAnswer">
      <ul>
      	<li>Quiz Answer: {this.props.answerA}</li>
      	
      	<li>Quiz Answer: {this.props.answerB}</li>
      	</ul>
      </div>
    );
  }
}

QuizAnswer.propTypes = {
  id: PropTypes.any.isRequired,
};

export default QuizAnswer;
