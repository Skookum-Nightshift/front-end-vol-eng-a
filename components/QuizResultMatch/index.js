/** @flow */

require('./styles.css');

import React from 'react';
import SingleMatch from 'SingleMatch';


var {PropTypes} = React;

class QuizResultMatch extends React.Component {

  render(): ?ReactElement {
  	 var {children, type, ...props} = this.props;

    return (
    <div className="QuizResultMatch">
      {this.props.results}
 	</div>
    );
  }
}

QuizResultMatch.propTypes = {
  id: PropTypes.any.isRequired,
};

export default QuizResultMatch;
