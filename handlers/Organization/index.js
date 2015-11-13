import React from 'react';
import {Resolver} from 'react-resolver';
import {apiGet} from 'requestLib';

class Organization extends React.Component {
  constructor(props){
    super(props);
    this.state = {}

  }

  componentDidMount(){
    var id = this.context.router.getCurrentParams().id;
    apiGet(`v1/organizations/${id}`, {},
      (data) => {
        console.log(data);
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
    return (
      <div className="Organization">
        Organization
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
