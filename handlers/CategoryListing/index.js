import React from 'react';
import {Resolver} from 'react-resolver';

class CategoryListing extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="CategoryListing">
        CategoryListing
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
