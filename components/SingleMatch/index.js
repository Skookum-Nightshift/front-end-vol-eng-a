/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
import List from 'material-ui/lib/lists';
import ListItem from 'material-ui/lib/lists';
import Avatar from 'material-ui/lib/lists';
import leftAvatar from 'material-ui/lib/lists';



class SingleMatch extends React.Component {

  render(): ?ReactElement {

  var {children, type, ...props} = this.props;

    return (
      <div className="SingleMatch">
          <List subheader="Matches">
            <ListItem
              leftAvatar={<Avatar src={this.props.data.logo} />}
              primaryText={this.props.data.name}
              secondaryText= {<p>
              {this.props.data.opportunityName}
              {this.props.data.opportunityDescription} 
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
