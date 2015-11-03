import React from 'react';
import {Resolver} from 'react-resolver';
import BlueButton from 'BlueButton';

class Opportunity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentDidMount() {
    this.setState({ connected: false });
  }

  onButtonClick() {
    if (this.state.connected == false) {
      this.setState({ connected: true });
    } else {
      this.setState({ connected: false });
    }
  }

  render(): ?ReactElement {

    var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac lectus et mauris efficitur feugiat aliquam in odio. Sed ut congue neque. Donec a erat mauris. Nulla pharetra lobortis mollis. Praesent eu semper tellus, vitae ullamcorper turpis. Proin ut justo lectus. Donec bibendum turpis lectus, non dictum erat laoreet a. Etiam eu lacinia elit. Ut dignissim urna metus, lobortis dignissim nibh bibendum non. Morbi vestibulum iaculis arcu eu rhoncus. Cras iaculis justo consequat, volutpat purus eget, tempus nisl. Proin eu nisi et leo cursus pellentesque."; 

    return (
      <div className="Opportunity">
        <p>{paragraph}</p>
        <BlueButton 
          label={this.state.connected ? "Connected" : "Connect" } 
          primary={this.state.connected ? true : false }
          secondary={this.state.connected ? false : true }
          style={{ margin: '10px 0', width: '100%', textAlign: 'center', height: '50px' }} 
          labelStyle={{fontWeight: '900', fontSize: '20px'}} 
          onClick={this.onButtonClick} />

      </div>
    );
  }
}

Opportunity.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

Opportunity.displayName = 'Opportunity';

export default Resolver.createContainer(Opportunity, {
  resolve: {
    /*
    promise() {
      return PromiseStore.find(this.getParams().id);
    }
    */
  },
});
