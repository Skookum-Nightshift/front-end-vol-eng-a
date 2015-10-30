import React from 'react';
import {Resolver} from 'react-resolver';
import CategoryItem from 'CategoryItem';
import CategoryList from 'CategoryList';
import CategoriesHeader from 'CategoriesHeader';
import Jumbotron from 'Jumbotron';

class Categories extends React.Component {
  constructor(){
    super();

    this.state = {
      categories: [
        {
          name: 'Seniors',
          icon: "/public/images/apollo.png"
        },
        {
          name: 'Animals',
          icon: "/public/images/apollo.png"
        },
        {
          name: 'Whatever',
          icon: "/public/images/apollo.png"
        },
      ]
    };

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
