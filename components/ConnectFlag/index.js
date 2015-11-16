/** @flow */

require('./styles.css');

import React from 'react';
import Input from 'Input';
import Paper from 'material-ui/lib/paper';
import SubmitButton from 'BlueButton';
import FlatButton from 'material-ui/lib/flat-button';
import UserActions from '../../actions/UserActions';
import UserStore from '../../stores/UserStore';
import {apiPost} from 'requestLib';

var {PropTypes} = React;

class ConnectFlag extends React.Component {

  constructor(){
    super();

    this.state = {
      userData: UserStore.getState().user
    };
  }

  componentDidMount() {
    UserStore.listen((state) => this.setState({ userData: state.userData }));
  }

  sendUserData() {

    if (this.state.userData) {
      var opportunities = this.state.userData.opportunities;
      var organizations = this.state.userData.organizations;
    } else {
      var opportunities = new Array();
      var organizations = new Array();
    }

    if (this.props.type == 'opportunity') { opportunities.push(this.props.data.opportunity_id); }
    organizations.push(this.props.data.organization_id);

    if (this.props.type == 'opportunity') {

       var userData = {
        "firstname": document.getElementById('firstname').value,
        "lastname": document.getElementById('lastname').value,
        "email": document.getElementById('email').value,
        "zipcode": document.getElementById('zipcode').value,
        "opportunity_id": this.props.data.opportunity_id,
        "opportunity_name": this.props.data.name,
        "organization_id": this.props.data.organization.organization_id,
        "organization_name": this.props.data.organization.name,
        "opportunities": opportunities,
        "organizations": organizations,
       };

   } else {
      var userData = {

        "firstname": document.getElementById('firstname').value,
        "lastname": document.getElementById('lastname').value,
        "email": document.getElementById('email').value,
        "zipcode": document.getElementById('zipcode').value,
        "opportunity_id": null,
        "opportunity_name": "Any Opportunity",
        "organization_id": this.props.data.organization_id,
        "organization_name": this.props.data.name,
        "opportunities": opportunities,
        "organizations": organizations,
       };
   }

      apiPost(`/v1/connection`, userData,
      (data) => {

          this.props.onChange();
          UserActions.updateUser(userData);

      },
      () => {
        console.log('error');
      }
    );

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

                { this.props.connected ?

                  <div className="ConnectConfirmation clearfix">
                    <h2>Thank you!</h2> <p>We have sent your information and someone from {this.props.type == 'opportunity' ? this.props.data.organization.name : this.props.data.name } will contact you soon!</p>

                     <FlatButton
                        onClick={this.props.onClick}
                        label="Close"
                        style={{margin: '10px', float: 'right', textAlign: 'center'}}  />

                  </div>

                  :

                  <div className="ConnectForm">
                    <h2>Send Your Information</h2>
                      <Input id="firstname" defaultValue={this.state.userData ? this.state.userData.firstname : null} placeholder="First Name" value="" style={{ width: '40%', marginRight: '5px' }} />
                      <Input id="lastname" defaultValue={this.state.userData ? this.state.userData.lastname : null} placeholder="Last Name" style={{ width: '40%' }} />
                      <Input id="email" defaultValue={this.state.userData ? this.state.userData.email : null} placeholder="Email" style={{ width: '90%' }} />
                      <Input id="zipcode" defaultValue={this.state.userData ? this.state.userData.zipcode : null} placeholder="Zip Code" style={{ width: '90%' }} />

                      <div className="clearfix">

                        <SubmitButton
                          label="Send"
                          style={{margin: '10px', float: 'right', textAlign: 'center'}}
                          onClick={this.sendUserData.bind(this)} />

                        <FlatButton
                          onClick={this.props.onClick}
                          label="Cancel"
                          style={{margin: '10px', float: 'right', textAlign: 'center'}}  />

                      </div>
                  </div>

                 }

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
