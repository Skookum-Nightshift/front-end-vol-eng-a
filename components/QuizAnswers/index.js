/** @flow */

require('./styles.css');

import React from 'react';
import QuizAnswer from 'QuizAnswer';
var {PropTypes} = React;

class QuizAnswers extends React.Component {
  constructor() {
    super();

    this.handleSelected = this.handleSelected.bind(this);
  }

  handleSelected(text) {
    this.props.onSelected(text)
  }

  render(): ?ReactElement {
    return (
      <div className="QuizAnswers row">
         <QuizAnswer onSelected={this.handleSelected} text={this.props.answerA} />
        <QuizAnswer onSelected={this.handleSelected} text={this.props.answerB} />
      </div>
    );
  }
}

QuizAnswers.propTypes = {
  answerA: PropTypes.string.isRequired,
  answerB: PropTypes.string.isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default QuizAnswers;
