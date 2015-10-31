import React from 'react';
import {Resolver} from 'react-resolver';
import CategoryItem from 'CategoryItem';
import CategoryList from 'CategoryList';
import HandlerHeader from 'HandlerHeader';
import Jumbotron from 'Jumbotron';
import BlueButton from 'BlueButton';

class Categories extends React.Component {
  constructor(){
    super();

    this.state = {
      categories: [
        {
          name: 'Children & Teens',
          icon: "/public/images/help-icon.svg"
        },
        {
          name: 'Homelessness',
          icon: "/public/images/help-icon.svg"
        },
        {
          name: 'Education',
          icon: "/public/images/help-icon.svg"
        },
        {
          name: 'Seniors',
          icon: "/public/images/help-icon.svg"
        },
        {
          name: 'Arts & Crafts',
          icon: "/public/images/help-icon.svg"
        },
        {
          name: 'Health & Wellness',
          icon: "/public/images/help-icon.svg"
        },
        {
          name: 'Employment & Life Skills',
          icon: "/public/images/help-icon.svg"
        },
        {
          name: 'Sports & Recreation',
          icon: "/public/images/help-icon.svg"
        },
        {
          name: 'Crisis Support',
          icon: "/public/images/help-icon.svg"
        },
        {
          name: 'Women',
          icon: "/public/images/help-icon.svg"
        },
        {
          name: 'Cleaning & Maintenance',
          icon: "/public/images/help-icon.svg"
        },
        {
          name: 'Food Preparation',
          icon: "/public/images/help-icon.svg"
        },
        {
          name: 'Elderly',
          icon: "/public/images/help-icon.svg"
        },
        {
          name: 'Donated Goods',
          icon: "/public/images/help-icon.svg"
        }
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
        <HandlerHeader title="Categories" introParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut mi a odio viverra venenatis vel eget urna. Aliquam non elit vulputate, rutrum arcu vitae, consectetur turpis. Praesent pellentesque iaculis condimentum. Nunc quis fringilla ex, eu sodales ipsum. Nam molestie, dui quis maximus sagittis, turpis nisl molestie ex, quis maximus urna est non nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus." />
        <CategoryList categories={categories}/>
        <p>Are you unsure where you might belong still?  Is the list a little long or are you curious what else you might be a great fit for?</p>
        <BlueButton
          label="Take Quiz" />
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
