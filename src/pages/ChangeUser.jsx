import React from 'react';
import UserSelect from '../components/UserSelect';
import styled from 'styled-components';

const UserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class SignIn extends React.Component {
  render() {
    return (
      <UserWrapper>
        <UserSelect
          loggedInUser={this.props.loggedInUser}
          updateLoggedInUser={this.props.updateLoggedInUser}
        />
      </UserWrapper>
    );
  }
}

export default SignIn;
