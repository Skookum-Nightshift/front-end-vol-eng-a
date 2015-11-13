import React from 'react';
import {Resolver} from 'react-resolver';
import {apiGet} from 'requestLib';
import OrganizationPage from 'OrganizationPage';
import Jumbotron from 'Jumbotron';
import ReactTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import BlueButton from 'BlueButton';
import ConnectFlag from 'ConnectFlag';
import PageContent from 'OpportunityPageContent';

class Organization extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  componentDidMount(){
    var id = this.context.router.getCurrentParams().id;
    apiGet(`v1/organizations/${id}`, {},
      (data) => {
        console.log(data);
        this.setState({
          organization: data.organization,
          connected: false,
          showConnectFlag: false,
          flagMaxHeight: 0,
        });
      },
      () => {
        console.log('error');
      }
    );
  }

  onButtonClick(){
    if (this.state.showConnectFlag === false){
      this.setState({ showConnectFlag: true, flagMaxHeight: 500 });
    } else {
      this.setState({ showConnectFlag: false, flagMaxHeight: 0 });
    }
  }

  render(): ?ReactElement {

    if(this.state.organization){
      var org = <OrganizationPage data={this.state.organization} />
    };

    return (
      <div className="Organization">
        <Jumbotron image="/public/uwcc/2-0001.jpg" />
        <div className = "Top">
           {org}
        <BlueButton
          label={this.state.connected ? "Connected" : "Connect" }
          primary={this.state.connected ? true : false }
          secondary={this.state.connected ? false : true }
          style={{ margin: '0', width: '100%', textAlign: 'center', height: '50px', boxShadow: '1px 7px 5px 0px rgba(94,92,94,0.52)', position: 'absolute', zIndex: 2 }}
          labelStyle={{fontWeight: '900', fontSize: '20px'}}
          onClick={this.onButtonClick} />

          <ReactTransitionGroup transitionName="slideIn" transitionEnterTimeout={500} transitionLeaveTimeout={300} >
              <ConnectFlag flagMaxHeight={this.state.flagMaxHeight} onClick={this.onButtonClick} />
          </ReactTransitionGroup>
        </div>
        <div className={this.state.showConnectFlag ? "PageOverlay" : "" }></div>
        {org}
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
