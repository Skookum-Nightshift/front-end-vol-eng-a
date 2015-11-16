require('./styles.css');

import React from 'react';
import {Resolver} from 'react-resolver';
import {apiGet} from 'requestLib';
import ReactTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import BlueButton from 'BlueButton';
import ConnectFlag from 'ConnectFlag';
import PageContent from 'OrganizationPage';
import UserStore from '../../stores/UserStore';


class Organization extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userData: UserStore.getState().user
    };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.connectionChange = this.connectionChange.bind(this);
  }

  componentDidMount(){
    var id = this.context.router.getCurrentParams().id;

    if (this.state.userData) {
      var organizations = this.state.userData.organizations;
      if (organizations.indexOf(parseInt(id)) >= 0) {
        var connection = true; 
      } else { var connection = false }
    }  else { var connection = false; }

    apiGet(`/v1/organizations/${id}`, {},
      (data) => {
        this.setState({
          content: data.organization,
          connected: connection,
          showConnectFlag: false,
          flagMaxHeight: 0,
        });
      },
      () => {
        console.log('error');
      }
    );
  }

  onButtonClick() {
    if (this.state.showConnectFlag === false) {
      this.setState({ showConnectFlag: true, flagMaxHeight: 600 });
    } else {
      this.setState({ showConnectFlag: false, flagMaxHeight: 0  });
    }
  }

  connectionChange() {
    if (this.state.connected === false) {
      this.setState({ connected: true });
    } else {
      this.setState({ connected: false });
    }
  }
 
  render(): ?ReactElement {

    if(this.state.content){
      var organizationTop = <PageContent organization={this.state.content} location="top" />
      var organizationBottom =  <PageContent organization={this.state.content} location="bottom" />
    }


    return (
      <div className="Organization">

        <div className="PageContent">
          {organizationTop}
        </div>

        <div className="PageTopContent">

          <BlueButton
            label={this.state.connected ? "Connected" : "Connect" }
            primary={this.state.connected ? true : false }
            secondary={this.state.connected ? false : true }
            style={{ margin: '0', width: '100%', textAlign: 'center', height: '50px', boxShadow: '1px 7px 5px 0px rgba(94,92,94,0.52)', position: 'absolute', zIndex: 2 }}
            labelStyle={{fontWeight: '900', fontSize: '20px'}}
            onClick={this.onButtonClick} />

            <ReactTransitionGroup transitionName="slideIn" transitionEnterTimeout={500} transitionLeaveTimeout={300} >
                <ConnectFlag 
                  flagMaxHeight={this.state.flagMaxHeight} 
                  data={this.state.content} 
                  connected={this.state.connected}
                  type="organization"
                  onClick={this.onButtonClick} 
                  onChange={this.connectionChange} />
            </ReactTransitionGroup>
        </div>

        <div className="PageContent">
          {organizationBottom}
        </div>

        <div className={this.state.showConnectFlag ? "PageOverlay" : "" }></div>



      </div>
    );
  }
}

Organization.propTypes = {
  // promise: React.PropTypes.string.isRequired,
};

Organization.contextTypes = {
  router: React.PropTypes.any.isRequired,
};


Organization.displayName = 'Organization';

export default Resolver.createContainer(Organization, {
  resolve: {
    /*
    promise() {
      return PromiseStore.find(this.getParams().id);
    }
    */
  },
});
