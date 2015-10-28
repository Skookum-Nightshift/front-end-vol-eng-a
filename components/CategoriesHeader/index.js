/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class CategoriesHeader extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="CategoriesHeader">
        <h2>Categories of Interest</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut mi a odio viverra venenatis vel eget urna. Aliquam non elit vulputate, rutrum arcu vitae, consectetur turpis. Praesent pellentesque iaculis condimentum.
        </p>
        <p>Nunc quis fringilla ex, eu sodales ipsum. Nam molestie, dui quis maximus sagittis, turpis nisl molestie ex, quis maximus urna est non nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras convallis ante ut felis dignissim congue. Donec a purus porta, maximus metus accumsan, dictum arcu. Mauris semper, quam eu auctor tempor, tortor tellus facilisis lorem, a aliquam mi magna quis arcu.
        </p>
      </div>
    );
  }
}

CategoriesHeader.propTypes = {
  id: PropTypes.any.isRequired,
};

export default CategoriesHeader;
