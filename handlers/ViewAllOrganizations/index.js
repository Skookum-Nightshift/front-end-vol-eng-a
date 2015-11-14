require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import HandlerHeader from 'HandlerHeader';
import OrganizationList from 'OrganizationList';
import OrganizationItem from 'OrganizationItem';
import {apiGet} from 'requestLib';

class ViewAllOrganizations extends React.Component {
 constructor(props){
    super(props);
    this.state = {}

  }

  componentDidMount(){
    apiGet('v1/organizations', {},
      (data) => {
        console.log(data);
        this.setState({
          organizations: data.organizations
        });
      },
      () => {
        console.log('error');
      }
    );
  }



  render(): ?ReactElement {
    if(this.state.organizations){
      var organizations = this.state.organizations.map(organization =>
        <OrganizationItem data={organization} />
        );
    }

    return (
      <div className="ViewAllOrganizations">
        <HandlerHeader title="View All Organizations" introParagraph=""/>
        <OrganizationList organizations={organizations} />
      </div>
    );
  }
}

ViewAllOrganizations.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

ViewAllOrganizations.displayName = 'ViewAllOrganizations';

export default Resolver.createContainer(ViewAllOrganizations, {
  resolve: {
    /*
    promise() {
      return PromiseStore.find(this.getParams().id);
    }
    */
  },
});
