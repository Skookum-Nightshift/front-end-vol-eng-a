import React from 'react';
import {Resolver} from 'react-resolver';
import AppBar from 'material-ui/lib/app-bar';
import FlatButton from 'material-ui/lib/flat-button';

class Home extends React.Component {

  render(): ?ReactElement {
    return (
      <div className="Home">
      	<AppBar
			  title="UWCCaspires"
			  iconElementRight={ <div><FlatButton label="Take the Quiz" /> <FlatButton label="Take the Quiz" /> <FlatButton label="Take the Quiz" /></div> } />
        HOME
      </div>
    );
  }
}

Home.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Home.displayName = 'Home';

export default Home;
