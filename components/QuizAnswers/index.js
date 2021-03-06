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

  handleSelected(value) {
    this.props.onSelected(value)
  }

  render(): ?ReactElement {
    return (
      <div className="QuizAnswers">
        <br/>
         <QuizAnswer onSelected={this.handleSelected} text={this.props.answerA} value={this.props.tagsA} buttonColor="#4d8fe5"/>
         <br/>
        <QuizAnswer onSelected={this.handleSelected} text={this.props.answerB} value={this.props.tagsB} buttonColor="#103a6f"/></div>
    );
  }
}

QuizAnswers.propTypes = {
  answerA: PropTypes.string.isRequired,
  answerB: PropTypes.string.isRequired,
   tagsA: PropTypes.array.isRequired,

  tagsB: PropTypes.array.isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default QuizAnswers;
