/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Jumbotron extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Jumbotron" style={{ backgroundImage: 'url(' + this.props.image + ')', backgroundRepeat: 'no-repeat', backgroundPosition: '0 50%', backgroundSize: 'cover'}}>
        <h1>{this.props.header}</h1>
        <h2>{this.props.subtitle}</h2>
        <p>{this.props.paragraph}</p>
      </div>
    );
  }
}
Jumbotron.defaultProps = {
size: 'cover',

};

Jumbotron.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Jumbotron;
