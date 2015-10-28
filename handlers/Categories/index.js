import React from 'react';
import {Resolver} from 'react-resolver';
import CategoriesContainer from 'CategoriesContainer';

class Categories extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Categories">
        <CategoriesContainer />
      </div>
    );
  }
}

Categories.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

Categories.displayName = 'Categories';

export default Resolver.createContainer(Categories, {
  resolve: {
    /*
    promise() {
      return PromiseStore.find(this.getParams().id);
    }
    */
  },
});
