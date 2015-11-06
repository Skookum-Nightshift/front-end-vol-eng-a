/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class HandlerHeader extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="HandlerHeader">
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
        <p>{this.props.introParagraph}</p>

      </div>
    );
  }
}

HandlerHeader.propTypes = {
  id: PropTypes.any.isRequired,
};

export default HandlerHeader;
