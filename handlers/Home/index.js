import React from 'react';
import { Router, Route, Link } from 'react-router';
import {Resolver} from 'react-resolver';
import BlueButton from 'BlueButton';
import GreenButton from 'GreenButton';
import HandlerHeader from 'HandlerHeader';

class Home extends React.Component {

  render(): ?ReactElement {

    var paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac lectus et mauris efficitur feugiat aliquam in odio. Sed ut congue neque. Donec a erat mauris. Nulla pharetra lobortis mollis. Praesent eu semper tellus, vitae ullamcorper turpis. Proin ut justo lectus. Donec bibendum turpis lectus, non dictum erat laoreet a. Etiam eu lacinia elit. Ut dignissim urna metus, lobortis dignissim nibh bibendum non. Morbi vestibulum iaculis arcu eu rhoncus. Cras iaculis justo consequat, volutpat purus eget, tempus nisl. Proin eu nisi et leo cursus pellentesque."; 

    return (
      <div className="Home">
        <HandlerHeader title={<span><strong>#UWCC</strong>aspires</span>} introParagraph={paragraph} />
      	<GreenButton 
          linkButton={true}
          containerElement={ <Link to="/quiz" /> }
          href="/quiz"
          label="Take the Quiz" />
        <BlueButton 
          linkButton={true}
          containerElement={ <Link to="/categories" /> }
          href="/categories"
          label="Click to see all our categories" />
      </div>
    );
  }
}

Home.propTypes = {
  // id: React.PropTypes.any.isRequired,
};

Home.displayName = 'Home';

export default Home;
