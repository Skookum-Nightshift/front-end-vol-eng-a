/** @flow */

require('./styles.css');

import React from 'react';
import SingleMatch from 'SingleMatch';
import Index from 'material-ui/lib/lists/index';



var {PropTypes} = React;

class QuizResultMatch extends React.Component {

  render(): ?ReactElement {
  	 var {children, type, ...props} = this.props;

    return (
    <div className="QuizResultMatch">
    <div className="Top3">
    <h3>Top 3 Matches</h3>
      {this.props.results[0]}
      {this.props.results[1]}
      {this.props.results[2]}
      </div>
      <br />
      <div className="3More">
      <h3> Additional Suggestions </h3>
      {this.props.results[3]}
      {this.props.results[4]}
      {this.props.results[5]}
      </div>
 	</div>
    );
  }
}

QuizResultMatch.propTypes = {
  id: PropTypes.any.isRequired,
};

export default QuizResultMatch;
