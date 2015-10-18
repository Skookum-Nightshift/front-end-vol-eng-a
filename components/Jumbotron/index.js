/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Jumbotron extends React.Component {
  render(): ?ReactElement {

    var {children, type, ...props} = this.props,
        className = `Jumbotron is-${type}`;


    return (
      <div className="Jumbotron">
        <h1>{this.props.header}</h1>
        <p>{this.props.paragraph}</p>
      </div>
    );
  }
}

Jumbotron.propTypes = {
	  type: PropTypes.oneOf(['Jumbotron', 'QuizQuestion']),
  id: PropTypes.any.isRequired,
};

Jumbotron.defaultProps = {
  type: 'Jumbotron',
};

export default Jumbotron;
