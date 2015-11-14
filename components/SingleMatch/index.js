/** @flow */

require('./styles.css');

import React from 'react';
import {List, ListItem, ListDivider, Avatar } from 'material-ui';
var {PropTypes} = React;


class SingleMatch extends React.Component {

  render(): ?ReactElement {

    return (
      <div className="SingleMatch">
          <List className="SingleMatchList">
            <ListItem
              primaryText={this.props.data.name}
              secondaryText= {<p><strong>
              {this.props.data.organization.name}: </strong>
              {this.props.data.description} 
              </p>}
         secondaryTextLines={2} />
          <ListDivider inset={true} />
          </List>
        </div>
    );
  }
}

SingleMatch.propTypes = {
  id: PropTypes.any.isRequired,
};

export default SingleMatch;
