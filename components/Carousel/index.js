/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Carousel extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Carousel">
        Carousel
      </div>
    );
  }
}

Carousel.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Carousel;
