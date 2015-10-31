import React from 'react';
import {Resolver} from 'react-resolver';
import HandlerHeader from 'HandlerHeader';
import OrganizationList from 'OrganizationList';

class CategoryListing extends React.Component {
  constructor(){
    super();

    this.state = {
      organizations: [
        {
          "name": "A Child’s Place",
          "contact":
          {
            "address": "601 E. Fifth Street Suite 230 Charlotte, NC 28202",
            "email": "",
            "phone": "7043433790",
            "web": "http://www.achildsplace.org",
            "volunteer_url": "",
            "facebook": "https://www.facebook.com/achildsplace.place",
            "twitter": "http://twitter.com/ACPCharlotte",
            "youtube": "http://www.youtube.com/user/AChildsPlaceNC"
          },
          "categories":
          [
            "children-and-teens",
            "homelessness",
            "education"
          ],
          "description": "There are more than 4,000 homeless children in CMS. A Child’s Place works to erase the impact of homelessness on children and their education. By providing educational and emotional support as well as medical referrals, children are able to stay in the classroom."
        }
      ]
    }
  }
  render(): ?ReactElement {
    var organizations = this.state.organizations.map(organization =>
      <OrganizationItem data={organization} />
      )

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
