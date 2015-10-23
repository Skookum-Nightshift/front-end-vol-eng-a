import React from 'react';
import {Resolver} from 'react-resolver';
import Jumbotron from 'Jumbotron';
import QuizAnswer from 'QuizAnswer'


class TakeQuiz extends React.Component {

  constructor() {
    super();

    this.state = {
      questions: [
        {
          text: "I would rather...",
          answerA: "Work directly with the people I am serving",
          answerB: "Help out indirectly (office work, etc)"
        },
        {
          text: "I would rather...",
          answerA: "Work with adults or seniors",
          answerB: "Teens or kids"
        },
        {
          text: "I would rather...",
          answerA: "Be very active (including moving, building, or lifting things)",
          answerB: "do something less physically involved (reading to kids)"
        },
         {
          text: "I would rather...",
          answerA: "Work one on one with someone in need",
          answerB: "Contribute with a group"
        },
        {
          text: "I would rather...",
          answerA: "Do arts and crafts or play games with a child",
          answerB: "Teach or tutor a child"
        },
        {
          text: "I would rather...",
          answerA: "Do arts and crafts or play games with a child",
          answerB: "Teach or tutor a child"
        },
        {
          text: "I would rather...",
          answerA: "Work outside",
          answerB: "Work inside"
        },
         {
          text: "I would rather...",
          answerA: "Be a big brother or sister to a child",
          answerB: "Help adults transition back into the workforce or manage their finances"
        },
        {
          text: "I would rather...",
          answerA: "Volunteer at a one time event",
          answerB: "Partner with an organization long-term"
        },
        {
          text: "Are you interested in opportunities that involve speaking Spanish?",
          answerA: "Yes",
          answerB: "No"
        },
        {
          text: "Would you like to prepare and/or serving food to others?",
          answerA: "Yes",
          answerB: "No"
        },
        {
          text: "Are you okay with participating in additional screening or training for a cause you care about?",
          answerA: "Yes",
          answerB: "No"
        },
        {
          text: "Are you okay with completing a background check?",
          answerA: "Yes",
          answerB: "No"
        },
      ],
      selectedAnswers: [],
      currentQuestion: 0
    };


    this.backButton =  this.backButton.bind(this);
    this.showResultsButton = this.showResultsButton.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
  }

  backButton() {
    this.setState({ currentQuestion: this.state.currentQuestion-1 });
  }
   showResultsButton() {
    this.setState({ currentQuestion: questions[0]});
  }



  handleSelected(option) {
    var {selectedAnswers, currentQuestion, questions} = this.state;
    selectedAnswers[currentQuestion] = option;
    var nextQuestion = currentQuestion+1 === questions.length ? currentQuestion : currentQuestion+1;
    this.setState({ selectedAnswers, currentQuestion: nextQuestion });
    console.log(selectedAnswers);
    console.log(questions.length, selectedAnswers.length);
  }

  render(): ?ReactElement {

    var question = this.state.questions[this.state.currentQuestion];

    var buttonBackOptions = {};
    if (this.state.currentQuestion === 0) {
      buttonBackOptions.disabled = true;
    }

    var buttonShowResults = {};
    if (this.state.selectedAnswers != this.state.questions.length) {
      buttonShowResults.disabled = true;
    }

    return (
      <div className="container">

         <Jumbotron className = "QuizQuestion" paragraph={question.text} />
         <QuizAnswers onSelected={this.handleSelected} answerA={question.answerA} answerB={question.answerB} /> 
         <div className="Navigate">
          <QuizNumber id={this.state.currentQuestion+1} remaining={this.state.questions.length} />
          <Button onClick={this.backButton} {...buttonBackOptions} >Go Back</Button>
            <Button onClick={this.showResultsButton} {...buttonShowResults}>Show Results</Button>

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
