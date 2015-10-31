/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class CategoryItem extends React.Component {

  render(): ?ReactElement {

    var {children, type, ...props} = this.props;

    return (
      <div className="CategoryItem">
      <img src={this.props.data.icon} width="75"/>
        <h3>{this.props.data.name}</h3>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  id: PropTypes.any.isRequired,
};

export default CategoryItem;
