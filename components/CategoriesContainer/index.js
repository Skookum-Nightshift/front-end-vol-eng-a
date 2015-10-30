/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
import CategoriesHeader from 'CategoriesHeader';
import CategoryList from 'CategoryList';

class CategoriesContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  ComponentDidMount(){
    this.setState({
      categories: ['1', '2', '3', '4']
    });
  }

  render(): ?ReactElement {
    return (
      <div className="CategoriesContainer">
        <CategoriesHeader />
        <CategoryList />
        {categories}
      </div>
    );
  }
}

CategoriesContainer.propTypes = {
  id: PropTypes.any.isRequired,
};

export default CategoriesContainer;
