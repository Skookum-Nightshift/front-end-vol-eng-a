/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class CarouselItem extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="CarouselItem">
         {this.props.data}
      </div>
    );
  }
}

CarouselItem.propTypes = {
  id: PropTypes.any.isRequired,
};

export default CarouselItem;
