require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import HandlerHeader from 'HandlerHeader';
import OrganizationList from 'OrganizationList';
import OrganizationItem from 'OrganizationItem';
import {apiGet} from 'requestLib';

class CategoryListing extends React.Component {
  constructor(props){
    super(props);
    this.state = {}

  }

  componentDidMount(){
    var id = this.context.router.getCurrentParams().id;
    apiGet(`v1/categories/${id}/organizations`, {},
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
      <div className="CategoryListing">
        <HandlerHeader title="Category Listing" introParagraph=""/>
        <OrganizationList organizations={organizations} />
      </div>
    );
  }
}

CategoryListing.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

CategoryListing.contextTypes = {
  router: React.PropTypes.any.isRequired,
};

CategoryListing.displayName = 'CategoryListing';

export default Resolver.createContainer(CategoryListing, {
  resolve: {
    /*
    promise() {
      return PromiseStore.find(this.getParams().id);
    }
    */
  },
});
