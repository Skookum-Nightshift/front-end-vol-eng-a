import React from 'react';
import {Resolver} from 'react-resolver';
import Jumbotron from 'Jumbotron';
import Carousel from 'Carousel';

class Home extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="Home">
      	<Jumbotron />
      	<Carousel />
      </div>
    );
  }
}

Home.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Home.displayName = 'Home';

export default Home;
