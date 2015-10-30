import React from 'react';
import {Resolver} from 'react-resolver';
import CategoriesContainer from 'CategoriesContainer';
import CategoryItem from 'CategoryItem';
import CategoryList from 'CategoryList';
import CategoriesHeader from 'CategoriesHeader';
import Jumbotron from 'Jumbotron';

class Categories extends React.Component {
  constructor(){
    super();

    this.state = {
      categories: ['1', '2', '3', '4', '5', '6', '7', '8']
    }

  }

  render(): ?ReactElement {

    if(this.state.categories){
      var categories = this.state.categories.map(category =>
        <CategoryItem data={category} />
        );
    }


    return (
      <div className="Categories">
        <CategoriesHeader />
        <CategoryList categories={categories}/>
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
