/** @flow */

require('./styles.css');

import React from 'react';
import Paper from 'material-ui/lib/paper';

var {PropTypes} = React;

class ConnectFlag extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="ConnectFlag">
         <Paper 
         		className="Flag" 
         		zDepth={2} 
         		style={{
         				margin:'0 auto', 
         				padding:'20px', 
         				width: '75%', 
         				maxHeight: this.props.flagMaxHeight }} 
         		key={0}>
            <p>Some Dialog</p>
          </Paper>
      </div>
    );
  }
}

ConnectFlag.propTypes = {
  id: PropTypes.any.isRequired,
};

export default ConnectFlag;
