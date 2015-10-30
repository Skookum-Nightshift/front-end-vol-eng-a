/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class QuizResultMatch extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="QuizResultMatch">
        QuizResultMatch
      </div>
    );
  }
}

QuizResultMatch.propTypes = {
  id: PropTypes.any.isRequired,
};

export default QuizResultMatch;
