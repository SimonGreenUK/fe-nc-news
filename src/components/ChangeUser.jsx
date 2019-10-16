import React from 'react';
import UserSelect from './UserSelect';

class SignIn extends React.Component {
  render() {
    return (
      <div>
        <UserSelect
          loggedInUser={this.props.loggedInUser}
          updateLoggedInUser={this.props.updateLoggedInUser}
        />
      </div>
    );
  }
}

export default SignIn;
