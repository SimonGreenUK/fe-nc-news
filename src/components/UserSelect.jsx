import React from 'react';
import * as api from '../utils/api';
import user_default from '../assets/images/user_default.jpg';
import { navigate } from '@reach/router';
import styled from 'styled-components';

const UserImg = styled.img`
  max-width: 150px;
  height: auto;
`;

const Select = styled.select`
  padding: 8px 15px;
  border: 2px solid var(--light-gray);
  border-radius: 6px;
  font-family: inherit;
  border-radius: 4px;
  height: 32.5px;
  cursor: pointer;
  min-width: 100px;
  :hover {
    border: 2px solid var(--dark-gray);
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

class UserSelect extends React.Component {
  state = {
    users: []
  };
  render() {
    return (
      <UserInfo>
        <h2>Current user: {this.props.loggedInUser.username}</h2>
        <UserImg
          src={this.props.loggedInUser.avatar_url}
          onError={e => {
            e.target.onerror = null;
            e.target.src = user_default;
          }}
          alt="user avatar"
        />
        <p>Choose a different user</p>
        <form>
          <label>
            <Select
              onChange={this.handleChange}
              value={this.props.loggedInUser.username}
            >
              {this.state.users.map(user => {
                return (
                  <option value={user.username} key={user.username}>
                    {user.username}
                  </option>
                );
              })}
            </Select>
          </label>
        </form>
      </UserInfo>
    );
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    api
      .getAllUsers()
      .then(users => {
        this.setState({ users });
      })
      .catch(({ response: { data } }) => {
        navigate(`/err`, {
          state: { msg: data.msg },
          replace: true
        });
      });
  };

  handleChange = e => {
    const user = this.state.users.find(user => {
      return user.username === e.target.value;
    });
    this.props.updateLoggedInUser(user);
  };
}

export default UserSelect;
