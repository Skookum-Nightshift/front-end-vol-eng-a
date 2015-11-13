/** @flow */

require('./styles.css');

import React from 'react';
import { Card, CardHeader,CardText,CardActions } from 'material-ui';
import { Router, Route, Link } from 'react-router'


var {PropTypes} = React;


class SingleMatch extends React.Component {

  render(): ?ReactElement {

    var viewOpp =  <Link to={`/opportunities/${this.props.data.opportunity_id}`}>{this.props.data.name}</Link>

    return (
      <div className="SingleMatch">
          <Card  initiallyExpanded={false} className="SingleMatchList">
            <CardHeader
              actAsExpander={true}
    showExpandableButton={true}
             title={viewOpp}
              subtitle= {<p><strong>
              {this.props.data.organization.name}: </strong>
              </p>} />
                           
              <CardText  expandable={true}>{this.props.data.description} </CardText>
          </Card>
        </div>
    );
  }
}

SingleMatch.propTypes = {
  id: PropTypes.any.isRequired,
};

export default SingleMatch;
