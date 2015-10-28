/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
import CategoriesHeader from 'CategoriesHeader';
import CategoryList from 'CategoryList';

class CategoriesContainer extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="CategoriesContainer">
        <CategoriesHeader />
        <CategoryList />
      </div>
    );
  }
}

CategoriesContainer.propTypes = {
  id: PropTypes.any.isRequired,
};

export default CategoriesContainer;
