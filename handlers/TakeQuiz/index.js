import React from 'react';
import {Resolver} from 'react-resolver';
import Jumbotron from 'Jumbotron';
import QuizAnswers from 'QuizAnswers';
import QuizNumber from 'QuizNumber';
import Button from 'Button';


require('./styles.css');


class TakeQuiz extends React.Component {

  constructor() {
    super();

    this.state = {
      questions: [
        {
          text: "I would rather",
          answerA: "A",
          answerB: "B"
        },
        {
          text: "I would rather 2",
          answerA: "A 2",
          answerB: "B 2"
        },
      ],
      selectedAnswers: [],
      currentQuestion: 0
    };


    this.backButton =  this.backButton.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
  }

  backButton() {
    this.setState({ currentQuestion: this.state.currentQuestion-1 });
  }

  handleSelected(option) {
    var {selectedAnswers, currentQuestion, questions} = this.state;
    selectedAnswers[currentQuestion] = option;
    var nextQuestion = currentQuestion+1 === questions.length ? currentQuestion : currentQuestion+1;
    this.setState({ selectedAnswers, currentQuestion: nextQuestion });
    console.log(selectedAnswers);
  }

  render(): ?ReactElement {

    var question = this.state.questions[this.state.currentQuestion];

    var buttonBackOptions = {};
    if (this.state.currentQuestion === 0) {
      buttonBackOptions.disabled = true;
    }

    var buttonNextOptions = {};
    if (this.state.currentQuestion+1 === this.state.questions.length) {
      buttonNextOptions.disabled = true;
    }

    return (
      <div className="container">

         <Jumbotron className = "QuizQuestion" header={question.text} />
         <QuizAnswers onSelected={this.handleSelected} answerA={question.answerA} answerB={question.answerB} /> 
         <div className="Navigate">
          <Button onClick={this.backButton} {...buttonBackOptions} >Back</Button>
          <QuizNumber id={this.state.currentQuestion} />
          <Button {...buttonNextOptions}  children="Next" />
         </div>
      </div>
    );
  }
}

TakeQuiz.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

TakeQuiz.displayName = 'TakeQuiz';

export default Resolver.createContainer(TakeQuiz, {
  resolve: {
    /*
    promise() {
      return PromiseStore.find(this.getParams().id);
    }
    */
  },
});
