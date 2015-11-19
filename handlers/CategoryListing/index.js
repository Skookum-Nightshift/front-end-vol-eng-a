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
    var catName = 'Category Listing';

    apiGet(`v1/categories/${id}/organizations`, {},
      (data) => {

        for (var key in data.organizations[0].categories) {
          if (id == data.organizations[0].categories[key].id ) {
            var catName = data.organizations[0].categories[key].name;
          }
        }
        if (data.organizations[0].categories.id === id) { var catName = data.organizations[0].categories.name; }
        this.setState({
          organizations: data.organizations,
          catName: catName
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
        <HandlerHeader title={this.state.catName} introParagraph=""/>
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
