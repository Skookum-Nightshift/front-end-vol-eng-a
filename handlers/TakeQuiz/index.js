import React from 'react';
import {Resolver} from 'react-resolver';
import Jumbotron from 'Jumbotron';
import QuizAnswer from 'QuizAnswer'


class TakeQuiz extends React.Component {

  render(): ?ReactElement {

    return (
      <div className="TakeQuiz">
         <Jumbotron header="Quiz" />
         <QuizAnswer answerA="Answer A"  answerB="Answer B"/> 
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
