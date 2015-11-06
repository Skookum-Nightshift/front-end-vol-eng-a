import React from 'react';
import {Resolver} from 'react-resolver';
import Jumbotron from 'Jumbotron';
import QuizAnswer from 'QuizAnswer';
import QuizAnswers from 'QuizAnswers';
import QuizNumber from 'QuizNumber';
import Button from 'Button';
import HandlerHeader from 'HandlerHeader';
import {apiPost} from 'requestLib';
import ResultsActions from '../../actions/ResultsActions';




class TakeQuiz extends React.Component {

  constructor() {
    super();

    this.state = {
      questions: [
        {
          text: "I would rather...",
          answerA: "Work directly with the people I am serving",
          tagsA: ["direct"],
          answerB: "Help out indirectly (office work, etc)",
          tagsB: ["indirect"]
        },
        {
          text: "I would rather...",
          answerA: "Work with adults or seniors",
          tagsA: ["adults", "seniors"],
          answerB: "Teens or kids",
          tagsB: ["teens-or-children"]

        },
       {
          text: "I would rather...",
          answerA: "Be very active (including moving, building, or lifting things)",
          tagsA: ["sports-recreation",  "cleaning-and-maintenance", "heavy-lifting"],
          answerB: "do something less physically involved (reading to kids)",
         tagsB: ["office"]

        },
        {
          text: "I would rather...",
          answerA: "Work one on one with someone in need",
          tagsA: ["individual"],
          answerB: "Contribute with a group",
          tagsB: ["group"]
        },
        {
          text: "I would rather...",
          answerA: "Do arts and crafts or play games with a child",
          tagsA: ["arts-and-crafts", "sports-recreation"],
          answerB: "Teach or tutor a child",
          tagsB: ["education"]

        },
        {
          text: "I would rather...",
          answerA: "Work outside",
          tagsA: ["sports-recreation",  "cleaning-and-maintenance", "heavy-lifting"],
          answerB: "Work inside",
          tagsB: ["office"]

        },
         {
          text: "I would rather...",
          answerA: "Be a big brother or sister to a child",
          tagsA: ["arts-and-crafts", "sports-recreation"],
          answerB: "Help adults transition back into the workforce or manage their finances",
          tagsB: ["employment-and-life-skills", "homelessness"]

        },
        {
          text: "I would rather...",
          answerA: "Volunteer at a one time event",
         tagsA: ["one-time", "onetime", "seasonal"],
          answerB: "Partner with an organization long-term",
          tagsB: ["ongoing"]

        },
        {
          text: "Are you interested in opportunities that involve speaking Spanish?",
          answerA: "Yes",
          tagsA: ["Spanish","Spanish","Spanish","Spanish"],
          answerB: "No",
          tagsB: []

        },
        {
          text: "Would you like to prepare and/or serving food to others?",
          answerA: "Yes",
          tagsA: ["food-preparation","food-preparation","food-preparation","food-preparation"],
          answerB: "No",
          tagsB: []

        },
        {
          text: "Are you okay with participating in additional screening or training for a cause you care about?",
          answerA: "Yes",
          tagsA: ["orientation","orientation","orientation","orientation", "interview", "application", "drug-screening"],
          answerB: "No",
          tagsB: []

        },
        {
          text: "Are you okay with completing a background check?",
          answerA: "Yes",
          tagsA: ["background-check","background-check","background-check","background-check"],
          answerB: "No",
          tagsB: []

        }, 
      ],
      selectedAnswers: [],
      currentQuestion: 0
    };


    this.backButton =  this.backButton.bind(this);
    this.showResults = this.showResults.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
  }

  backButton() {
    this.setState({ currentQuestion: this.state.currentQuestion-1 });
  }

  showResults() {
    var {selectedAnswers} = this.state;
    var tags = selectedAnswers.reduce((a, b)=>a.concat(b));
    apiPost('v1/matches', { tags }, 
      (results) => {
        console.log(results);
        ResultsActions.updateResults(results);
        this.context.router.transitionTo('results');
      }
    );
  }

  handleSelected(option) {
    var {selectedAnswers, currentQuestion, questions} = this.state;
    selectedAnswers[currentQuestion] = option;
    var nextQuestion = currentQuestion+1 === questions.length ? currentQuestion : currentQuestion+1;

    this.setState({ selectedAnswers, currentQuestion: nextQuestion });
  }



  render(): ?ReactElement {

    var question = this.state.questions[this.state.currentQuestion];

    var buttonBackOptions = {};
    if (this.state.currentQuestion === 0) {
      buttonBackOptions.disabled = true;
    }

    var buttonShowResults;
    if (this.state.selectedAnswers.length === this.state.questions.length) {
             buttonShowResults =  <Button  className="ShowReesultsButton" {...buttonShowResults}  linkButton={true} onClick={this.showResults} label="Show Results" />
    }

    return (
      <div className="container">

         <HandlerHeader className = "QuizQuestion" subtitle={question.text} />
         <QuizNumber id={this.state.currentQuestion+1} remaining={this.state.questions.length} />
         <QuizAnswers onSelected={this.handleSelected} answerA={question.answerA} tagsA={question.tagsA} answerB={question.answerB} tagsB={question.tagsB}  /> 
         <div className="Navigate">
          <Button  className="BackButton" onClick={this.backButton} {...buttonBackOptions} label="Back" />
         </div>
         {buttonShowResults}
      </div>
    );
  }
}



TakeQuiz.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

TakeQuiz.contextTypes = {
  router: React.PropTypes.any.isRequired
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
