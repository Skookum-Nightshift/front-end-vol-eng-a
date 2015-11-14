import React from 'react';
import {Resolver} from 'react-resolver';
import {apiGet} from 'requestLib';
import OrganizationPage from 'OrganizationPage';
import Jumbotron from 'Jumbotron';
import SingleMatch from 'SingleMatch';
import QuizResultMatch from 'QuizResultMatch';
import OpportunityList from 'OpportunityList';
import OpportunityItem from 'OpportunityItem';

class Organization extends React.Component {
  constructor(props){
    super(props);
    this.state = {}

  }

  componentDidMount(){
    var id = this.context.router.getCurrentParams().id;
    apiGet(`v1/organizations/${id}`, {},
      (data) => {
        console.log(data.organization);
        console.log(data.organization.opportunities);
        this.setState({
          content: data.organization,
        });
      },
      () => {
        console.log('error');
      }
    );
  }

  render(): ?ReactElement {

    if(this.state.content){
      var opps = this.state.content.opportunities.map(opp =>
        <OpportunityItem data={opp} />
        );
      var info = <OrganizationPage data={this.state.content} />
    };

    return (
      <div className="Organization">
        {info}
        <OpportunityList opportunities={opps}/>
      </div>
    );
  }
}

Organization.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

Organization.contextTypes = {
  router: React.PropTypes.any.isRequired,
};

Organization.displayName = 'Organization';

export default Resolver.createContainer(Organization, {
  resolve: {
    /*
    promise() {
      return PromiseStore.find(this.getParams().id);
    }
    */
  },
});
