/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;

class Jumbotron extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Jumbotron">
        <h1>Who we are</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac lectus et mauris efficitur feugiat aliquam in odio. Sed ut congue neque. Donec a erat mauris. Nulla pharetra lobortis mollis. Praesent eu semper tellus, vitae ullamcorper turpis. Proin ut justo lectus. Donec bibendum turpis lectus, non dictum erat laoreet a. Etiam eu lacinia elit. Ut dignissim urna metus, lobortis dignissim nibh bibendum non. Morbi vestibulum iaculis arcu eu rhoncus. Cras iaculis justo consequat, volutpat purus eget, tempus nisl. Proin eu nisi et leo cursus pellentesque.</p>
      </div>
    );
  }
}

Jumbotron.propTypes = {
  id: PropTypes.any.isRequired,
};

export default Jumbotron;
