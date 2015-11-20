import React from 'react';
import { Router, Route, Link } from 'react-router';
import {Resolver} from 'react-resolver';
import BlueButton from 'BlueButton';
import GreenButton from 'GreenButton';
import Jumbotron from 'Jumbotron';
import HandlerHeader from 'HandlerHeader';

class Home extends React.Component {

  render(): ?ReactElement {

    var paragraph = "Welcome to UWCCaspires, United Way of Central Carolinas' volunteer portal! Our goal is to help you seamlessly discover the organizations and specific volunteering opportunities that align with your interests. Please take a moment to view our partner organizations by category or take the volunteer quiz to see which opportunities we suggest for you. Once you find the right opportunity and organization, you may easily connect via the blue connect button on the organization's profile page. Any user contact information shared with an organization is kept private and is never shared with an additional party outside of UWCC."; 

    return (
      <div className="Home">

        <Jumbotron image="/public/images/DSC_1419_Extended.jpg" />

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
