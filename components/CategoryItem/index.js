/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class CategoryItem extends React.Component {

  render(): ?ReactElement {

    var {children, type, ...props} = this.props;

    return (
      <div className="CategoryItem">
        <h1>{this.props.data.name}</h1>
        <img src={this.props.data.icon} width="150"/>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  id: PropTypes.any.isRequired,
};

export default CategoryItem;
