/** @flow */

require('./styles.css');

import React from 'react';
import Button from  'Button';
import {Paper} from 'material-ui';
var {PropTypes} = React;

class QuizAnswer extends React.Component {

constructor() {
 super();
 
 this.handleSelected = this.handleSelected.bind(this);
}

handleSelected() {
	this.props.onSelected(this.props.value)
  }


  render(): ?ReactElement {
    return (
    <div className="SingleQuizAnswer">
	   <div className="answer"> <Paper zDepth={2} circle={true}> <p>{this.props.number}</p> </Paper></div>
     <div className="answer"><Button onClick={this.handleSelected} label={this.props.text} value={this.props.value} /> </div>
    </div>
    );
  }
}

QuizAnswer.propTypes = {
  id: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired,
  onSelected: PropTypes.func.isRequired,
};

export default QuizAnswer;
