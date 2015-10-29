/** @flow */

require('./styles.css');

import React from 'react';
import Button from  'Button';
var {PropTypes} = React;

class QuizAnswer extends React.Component {

constructor() {
 super();
 
 this.handleSelected = this.handleSelected.bind(this);
}

handleSelected() {
	this.props.onSelected(this.props.text)
  }


  render(): ?ReactElement {
    return <Button onClick={this.handleSelected} label={this.props.text} />;
  }
}

QuizAnswer.propTypes = {
  id: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default QuizAnswer;
