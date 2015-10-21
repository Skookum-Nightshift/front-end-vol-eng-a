/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class QuizNumber extends React.Component {

  render(): ?ReactElement {

    return (
      <div className="QuizNumber">
      	{this.props.id}
      </div>
    );
  }
}

QuizNumber.propTypes = {
  id: PropTypes.any.isRequired,
};

export default QuizNumber;
