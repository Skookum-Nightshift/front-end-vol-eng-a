/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class CategoryItem extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="CategoryItem">
        CategoryItem
      </div>
    );
  }
}

CategoryItem.propTypes = {
  id: PropTypes.any.isRequired,
};

export default CategoryItem;
