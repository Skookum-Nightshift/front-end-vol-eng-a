/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
import CategoryItem from 'CategoryItem';

class CategoryList extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="CategoryList">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    );
  }
}

CategoryList.propTypes = {
  id: PropTypes.any.isRequired,
};

export default CategoryList;
