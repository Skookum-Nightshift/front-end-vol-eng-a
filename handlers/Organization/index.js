import React from 'react';
import {Resolver} from 'react-resolver';

class Organization extends React.Component {
  render(): ?ReactElement {
    return (
      <div className="Organization">
        Organization
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
