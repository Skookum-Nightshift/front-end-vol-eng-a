/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
import { Router, Route, Link } from 'react-router'

class CategoryItem extends React.Component {

handleClick(event) {
  console.log("hey");
}

  render(): ?ReactElement {

    var {children, type, ...props} = this.props;

    return (
      <div className="CategoryItem">
          <img src={this.props.data.icon} width="75"/>
          <h2><Link to={`/category/${this.props.data.id}`}>{this.props.data.name}</Link></h2>
          <h3>{this.props.data.id}</h3>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  id: PropTypes.any.isRequired,
};

export default CategoryItem;
