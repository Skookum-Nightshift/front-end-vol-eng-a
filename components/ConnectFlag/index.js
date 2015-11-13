/** @flow */

require('./styles.css');

import React from 'react';
import Input from 'Input';
import Paper from 'material-ui/lib/paper';
import SubmitButton from 'BlueButton';
import FlatButton from 'material-ui/lib/flat-button';

var {PropTypes} = React;

class ConnectFlag extends React.Component {

  handleSumbit() {
    console.log();

  }

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

              <form id="ConnectFlagForm">
                <h2>Send Your Information</h2>
                <Input id="firstname" placeholder="First Name" style={{ width: '40%', marginRight: '5px' }} />
                <Input id="lastname" placeholder="Last Name" style={{ width: '40%' }} />
                <Input id="email" placeholder="Email" style={{ width: '90%' }} />
                <Input id="zipcode" placeholder="Zip Code" style={{ width: '90%' }} />

                <div className="clearfix">
                
                  <SubmitButton 
                    label="Send" 
                    style={{margin: '10px', float: 'right', textAlign: 'center'}}
                    onClick={this.handleSumbit} /> 

                  <FlatButton 
                    onClick={this.props.onClick} 
                    label="Cancel"
                    style={{margin: '10px', float: 'right', textAlign: 'center'}}  />

                </div>

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
