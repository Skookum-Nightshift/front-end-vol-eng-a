/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
import CategoryItem from 'CategoryItem';

class CategoryList extends React.Component {

  render(): ?ReactElement {
    var {children, type, ...props} = this.props;

    return (
      <div className="CategoryList">
        {this.props.categories}
      </div>
    );
  }
}

CategoryList.propTypes = {
  id: PropTypes.any.isRequired,
};

export default CategoryList;
