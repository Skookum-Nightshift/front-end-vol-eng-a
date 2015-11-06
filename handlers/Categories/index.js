import React from 'react';
import {Resolver} from 'react-resolver';
import CategoryItem from 'CategoryItem';
import CategoryList from 'CategoryList';
import HandlerHeader from 'HandlerHeader';
import Jumbotron from 'Jumbotron';
import BlueButton from 'BlueButton';
import {apiGet} from 'requestLib';

class Categories extends React.Component {
  constructor(){
    super();

    this.state = {};

  }

  componentDidMount(){
    apiGet('v1/categories', {},
      (data) => {
        console.log(data);
        this.setState({
          categories: data.categories
        });
      },
      () => {
        console.log('error');
      }
    );
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
