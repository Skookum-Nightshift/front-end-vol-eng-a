import React from 'react';
import {Resolver} from 'react-resolver';
import Jumbotron from 'Jumbotron';

class Home extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="Home">
      	<Jumbotron />
      </div>
    );
  }
}

Home.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Home.displayName = 'Home';

export default Home;
