import React from 'react';
import {Resolver} from 'react-resolver';
import {apiGet} from 'requestLib';
import OrganizationPage from 'OrganizationPage';
import Jumbotron from 'Jumbotron';
import SingleMatch from 'SingleMatch';

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
        this.setState({
          organization: data.organization
        });
      },
      () => {
        console.log('error');
      }
    );
  }

  render(): ?ReactElement {

    if(this.state.organization){
      var info = <OrganizationPage data={this.state.organization} />
    };

    return (
      <div className="Organization">
        <Jumbotron image="/public/uwcc/2-0001.jpg" />
        {info}
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
