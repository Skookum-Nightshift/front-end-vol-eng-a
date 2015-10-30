import React from 'react';
import {Resolver} from 'react-resolver';

class QuizResults extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="QuizResults">
        QuizResults
      </div>
    );
  }
}

QuizResults.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

QuizResults.displayName = 'QuizResults';

export default Resolver.createContainer(QuizResults, {
  resolve: {
    /*
    promise() {
      return PromiseStore.find(this.getParams().id);
    }
    */
  },
});
