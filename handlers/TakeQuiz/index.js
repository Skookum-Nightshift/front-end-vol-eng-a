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
          tagsB: ["indirect"],
          pic: "public/images/1308_BelkUniformsCabarrus_0002.jpg"
        },
        {
          text: "I would rather...",
          answerA: "Work with adults or seniors",
          tagsA: ["adults", "seniors"],
          answerB: "Teens or kids",
          tagsB: ["teens-or-children"],
          pic: "public/images/WingateUniversityTeamandMrThomasHuey.jpg"


        },
       {
          text: "I would rather...",
          answerA: "Be very active (including moving, building, or lifting things)",
          tagsA: ["sports-recreation",  "cleaning-and-maintenance", "heavy-lifting"],
          answerB: "do something less physically involved (reading to kids)",
          tagsB: ["office"],
          pic: "public/images/United_Way_Day_Of_Caring_002.jpg"
        },
        {
          text: "I would rather...",
          answerA: "Work one on one with someone in need",
          tagsA: ["individual"],
          answerB: "Contribute with a group",
          tagsB: ["group","group","group"],
          pic: "public/images/1409_EYVolunteers_0003.jpg"
        },
        {
          text: "I would rather...",
          answerA: "Do arts and crafts or play games with a child",
          tagsA: ["arts-and-crafts", "sports-recreation"],
          answerB: "Teach or tutor a child",
          tagsB: ["education"],
          pic: "public/images/DSC_1419_Extended.jpg"

        },
        {
          text: "I would rather...",
          answerA: "Work outside",
          tagsA: ["sports-recreation",  "cleaning-and-maintenance", "heavy-lifting"],
          answerB: "Work inside",
          tagsB: ["office"],
          pic: "public/images/20140606_103224_resized.jpg"

        },
         {
          text: "I would rather...",
          answerA: "Be a big brother or sister to a child",
          tagsA: ["arts-and-crafts", "sports-recreation"],
          answerB: "Help adults transition back into the workforce or manage their finances",
          tagsB: ["employment-and-life-skills", "homelessness"],
          pic: "public/images/DSC_0394.jpg"

        },
        {
          text: "I would rather...",
          answerA: "Volunteer at a one time event",
         tagsA: ["one-time", "onetime", "seasonal"],
          answerB: "Partner with an organization long-term",
          tagsB: ["ongoing"],
          pic: "public/images/1411_BAC Urban Garden Volunteer_0011.jpg"

        },
        {
          text: "Are you interested in opportunities that involve speaking Spanish?",
          answerA: "Yes",
          tagsA: ["Spanish","Spanish","Spanish"],
          answerB: "No",
          tagsB: [],
          pic: "public/images/DSC_1419_Extended.jpg"

        },
        {
          text: "Would you like to prepare and/or serving food to others?",
          answerA: "Yes",
          tagsA: ["food-preparation","food-preparation","food-preparation"],
          answerB: "No",
          tagsB: [],
          pic: "public/images/1407_CHS Volunteers__Safe Alliance_0026.jpg"

        },
        {
          text: "Are you okay with completing a background check?",
          answerA: "Yes",
          tagsA: ["background-check"],
          answerB: "No",
          tagsB: [],
          pic: "public/images/1412_BACTrikeBuild_0010.jpg"

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

/*    var noBackgroundCheckTags = function(arrayOfTags) {
      if(selectedAnswers[11] != "background-check") {
      var first= arrayOfTags.indexOf(keyword);
      var last = arrayOfTags.lastIndexOf(keyword);
    
    if(last > 0) {
        arrayOfTags.splice(first,last+1);
      } else if(first > 0) {
         arrayOfTags.splice(first,1)
      }
    }
    return arrayOfTags;
    } */

    var topChoice =  function (tags) {
          if(tags.length == 0)
            return null;
          var modeMap = {};
          var maxEl = tags[0], maxCount = 1;
          for(var i = 0; i < tags.length; i++)
          {
            var el = tags[i];
            if(modeMap[el] == null)
              modeMap[el] = 1;
            else
              modeMap[el]++;  
            if(modeMap[el] > maxCount)
            {
              maxEl = el;
              maxCount = modeMap[el];
            }
          }
          return maxEl;
        }

/*        tags = noBackgroundCheckTags("teens-or-children", tags);
        tags = noBackgroundCheckTags("education", tags); */
        var yesToBackgroundCheck = tags.indexOf("background-check");

    var duplicate = tags.sort();
    var foundTop = topChoice(duplicate);
    duplicate.splice(duplicate.indexOf(foundTop),duplicate.lastIndexOf(foundTop)+1);

    var second = topChoice(duplicate);

    duplicate.splice(duplicate.indexOf(second),duplicate.lastIndexOf(second)+1);

    var third = topChoice(duplicate);


    var tags = [foundTop,second, third];
 if(yesToBackgroundCheck < 0) {
  tags.unshift("no-background-check");
 }


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
             buttonShowResults =  <Button style={{ float: "right", margin: "20px" }}  labelPosition="after" className="ShowReesultsButton" {...buttonShowResults}  linkButton={true} onClick={this.showResults} label="Show Results" />
    }


    return (
      <div className="container">
              <Jumbotron image={question.pic} header={question.text}/>
         <HandlerHeader className = "QuizQuestion" />
         <QuizNumber id={this.state.currentQuestion+1} remaining={this.state.questions.length} />
         <QuizAnswers onSelected={this.handleSelected} answerA={question.answerA} tagsA={question.tagsA} answerB={question.answerB} tagsB={question.tagsB}  /> 
         <div className="Navigate"> <Button style={{ float: "right", margin: "20px" }}  className="BackButton" onClick={this.backButton} {...buttonBackOptions} label="Back" />
         {buttonShowResults} </div>
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
