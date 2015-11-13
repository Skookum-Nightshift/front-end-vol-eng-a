/** @flow */

require('./styles.css');

import React from 'react';
import Input from 'Input';
import Paper from 'material-ui/lib/paper';
import SubmitButton from 'BlueButton';
import FlatButton from 'material-ui/lib/flat-button';

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
         				width: '85%', 
         				maxHeight: this.props.flagMaxHeight }} 
         		key={0}>
            { this.props.flagMaxHeight > 0 ? 

              <form>
                <h2>Send Your Information</h2>
                <Input placeholder="First Name" style={{ width: '40%', marginRight: '5px' }} />
                <Input placeholder="Last Name" style={{ width: '40%' }} />
                <Input placeholder="Email" style={{ width: '90%' }} />
                <Input placeholder="Zip Code" style={{ width: '40%' }} />

                <SubmitButton 
                  label="Create" 
                  style={{margin: '10px', float: 'right', textAlign: 'center'}} /> 

                <FlatButton 
                  onClick={this.props.onClick} 
                  label="Cancel"
                  style={{margin: '10px', float: 'right', textAlign: 'center'}}  />

                

              </form>

             : null }
          </Paper>
      </div>
    );
  }
}

ConnectFlag.propTypes = {
  id: PropTypes.any.isRequired,
};

export default ConnectFlag;
