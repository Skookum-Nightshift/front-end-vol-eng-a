/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class CarouselItem extends React.Component {


  render(): ?ReactElement {

		var {children, type, ...props} = this.props,
        className = `CarouselItem is-${type}`;

    return (
      <div className={className}>      	
         <span>{this.props.data}</span>
      </div>
    );
  }
}

CarouselItem.propTypes = {
  id: PropTypes.any.isRequired,
  type: PropTypes.oneOf(['icons', 'images', 'thumbs']),
};

CarouselItem.defaultProps = {
  type: 'icons',
};

export default CarouselItem;
