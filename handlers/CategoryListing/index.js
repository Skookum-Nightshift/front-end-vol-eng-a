require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import HandlerHeader from 'HandlerHeader';
import OrganizationList from 'OrganizationList';
import OrganizationItem from 'OrganizationItem';
import {apiGet} from 'requestLib';

// make request to v1/categories/:id/organizations to get array of matching organizations
// pass the category id from query params from the link to action from the categoryItem component
// pass that categoryID from an onClick event from the categoryItem

class CategoryListing extends React.Component {
  constructor(){
    super();

    this.state = {}
  }

  componentDidMount(){
    apiGet('v1/categories/2/organizations', {},
      (data) => {
        console.log(data);
        this.setState({
          organizations: data.categories
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
        <HandlerHeader title="Category Listing" introParagraph="blah blah blah"/>
        <OrganizationList organizations={organizations} />
      </div>
    );
  }
}

CategoryListing.propTypes = {
  // promise: React.PropTypes.string.isRequired,
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
