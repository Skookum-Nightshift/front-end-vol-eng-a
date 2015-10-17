/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
import CarouselItem from 'CarouselItem';

class Carousel extends React.Component {

	constructor(props) {
    super(props);
       this.state = {};
  }

	componentDidMount() {
		 this.setState({
		 	items: ['animals','children','crisis','seniors']
		 });
	}

  render(): ?ReactElement {
  	
  	if (this.state.items) {
  		console.log(this.state.items);
  		var items = this.state.items.map(item => <CarouselItem data={item} />);
  	}
  	
    return (
      <div className="Carousel">
      {items}
      </div>
    );
  }
}

Carousel.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Carousel;
