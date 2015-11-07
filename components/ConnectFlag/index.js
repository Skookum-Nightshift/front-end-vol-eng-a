/** @flow */

require('./styles.css');

import React from 'react';
import Paper from 'material-ui/lib/paper';

var {PropTypes} = React;

class ConnectFlag extends React.Component {
  render(): ?ReactElement {
    if (this.props.flagMaxHeight > 0 ) { 
      var padding =  '20px';
    } else { 
      var padding = '0px'; 
     }

    return (
      <div className="ConnectFlag">
         <Paper 
         		className="Flag" 
         		zDepth={2} 
         		style={{
         				margin:'0 auto', 
         				padding: padding, 
         				width: '75%', 
         				maxHeight: this.props.flagMaxHeight }} 
         		key={0}>
            { this.props.flagMaxHeight > 0 ? "Connect Form" : null }
          </Paper>
      </div>
    );
  }
}

ConnectFlag.propTypes = {
  id: PropTypes.any.isRequired,
};

export default ConnectFlag;
