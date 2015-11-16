/** @flow */

require('./styles.css');

import React from 'react';
var {PropTypes} = React;
import {Card} from 'material-ui/lib/card';
import {CardActions} from 'material-ui/lib/card';
import { Router, Route, Link } from 'react-router';

class OrganizationItem extends React.Component {
  render(): ?ReactElement {

    var {children, type, ...props} = this.props;


    return (
      <div className="OrganizationItem">
        <Card>
          <div className="Content">
            <h1><Link to={`/organization/${this.props.data.organization_id}`}>{this.props.data.name}</Link></h1>
            <p>{this.props.data.address}, {this.props.data.city}, {this.props.data.state} {this.props.data.zip}</p>
          </div>
        </Card>
      </div>
    );
  }
}

OrganizationItem.propTypes = {
  id: PropTypes.any.isRequired,
};

export default OrganizationItem;
