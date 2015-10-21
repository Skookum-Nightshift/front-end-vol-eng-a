import React from 'react';
import {Resolver} from 'react-resolver';
import Jumbotron from 'Jumbotron';
import Carousel from 'Carousel';
import RaisedButton from 'material-ui/lib/raised-button';

class Home extends React.Component {

  render(): ?ReactElement {

    var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac lectus et mauris efficitur feugiat aliquam in odio. Sed ut congue neque. Donec a erat mauris. Nulla pharetra lobortis mollis. Praesent eu semper tellus, vitae ullamcorper turpis. Proin ut justo lectus. Donec bibendum turpis lectus, non dictum erat laoreet a. Etiam eu lacinia elit. Ut dignissim urna metus, lobortis dignissim nibh bibendum non. Morbi vestibulum iaculis arcu eu rhoncus. Cras iaculis justo consequat, volutpat purus eget, tempus nisl. Proin eu nisi et leo cursus pellentesque."; 

    return (
      <div className="Home">
      	<Jumbotron header="Who we are" paragraph={paragraph} />
      	<Carousel type="icons" />
        <RaisedButton 
          className="clearfix"
          label="Primary" 
          primary={true} />
        <RaisedButton label="Secondary" backgroundColor="#2196F3" labelColor="#FFFFFF" />
      </div>
    );
  }
}

Home.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Home.displayName = 'Home';

export default Home;
