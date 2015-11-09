/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Jumbotron extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Jumbotron" style={{ background: 'url(' + this.props.image + ') no-repeat top center', backgroundSize: 'cover' }}>
        <h1>{this.props.header}</h1>
        <p>{this.props.paragraph}</p>
      </div>
    );
  }
}

Jumbotron.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Jumbotron;
