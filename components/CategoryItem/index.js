/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
import { Router, Route, Link } from 'react-router'

class CategoryItem extends React.Component {

  render(): ?ReactElement {

    var {children, type, ...props} = this.props;

    return (
      <div className="CategoryItem">
          <img src={this.props.data.icon} width="75"/>
          <p><Link to={`/category/${this.props.data.id}`}>{this.props.data.name}</Link></p>
      </div>
    );
  }
}

CategoryItem.propTypes = {
  id: PropTypes.any.isRequired,
};

export default CategoryItem;
