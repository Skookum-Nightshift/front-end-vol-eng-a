/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
import CategoriesHeader from 'CategoriesHeader';

class CategoriesContainer extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="CategoriesContainer">
        <CategoriesHeader />
      </div>
    );
  }
}

CategoriesContainer.propTypes = {
  id: PropTypes.any.isRequired,
};

export default CategoriesContainer;
