import React from 'react';
import {Resolver} from 'react-resolver';
import Jumbotron from 'Jumbotron';
import QuizAnswer from 'QuizAnswer';
import QuizAnswers from 'QuizAnswers';
import QuizNumber from 'QuizNumber';
import Button from 'Button';



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
          tagsA: ["Spanish"],
          answerB: "No",
          tagsB: []

        },
        {
          text: "Would you like to prepare and/or serving food to others?",
          answerA: "Yes",
          tagsA: ["food-preparation"],
          answerB: "No",
          tagsB: []

        },
        {
          text: "Are you okay with participating in additional screening or training for a cause you care about?",
          answerA: "Yes",
          tagsA: ["orientation", "interview", "application", "drug-screening"],
          answerB: "No",
          tagsB: []

        },
        {
          text: "Are you okay with completing a background check?",
          answerA: "Yes",
          tagsA: ["background-check"],
          answerB: "No",
          tagsB: []

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
    if(questions.length === currentQuestion+1) {
      var asString = selectedAnswers.join();
      console.log(asString);
    }
  }

  render(): ?ReactElement {

    var question = this.state.questions[this.state.currentQuestion];

    var buttonBackOptions = {};
    if (this.state.currentQuestion === 0) {
      buttonBackOptions.disabled = true;
    }

    var buttonShowResults = {};
    if (this.state.selectedAnswers.length != this.state.questions.length) {
      buttonShowResults.disabled = true;

    }

    return (
      <div className="container">

         <Jumbotron className = "QuizQuestion" header={question.text} />
                   <QuizNumber id={this.state.currentQuestion+1} remaining={this.state.questions.length} />
         <QuizAnswers onSelected={this.handleSelected} answerA={question.answerA} tagsA={question.tagsA} answerB={question.answerB} tagsB={question.tagsB}  /> 
         <div className="Navigate">
          <Button onClick={this.backButton} {...buttonBackOptions} label="Go Back" />
            <Button {...buttonShowResults}  linkButton={true} href="/results"label="Show Results" />

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
