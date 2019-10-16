import React from 'react';
import * as api from '../utils/api';
import no_img from '../assets/images/no_img.png';
import { navigate } from '@reach/router';

class UserSelect extends React.Component {
  state = {
    users: []
  };
  render() {
    return (
      <div>
        <p>Current user: {this.props.loggedInUser.username}</p>
        <img
          src={this.props.loggedInUser.avatar_url}
          onError={e => {
            e.target.onerror = null;
            e.target.src = no_img;
          }}
          alt="user avatar"
        />
        <p>Choose a different user</p>
        <form>
          <label>
            <select
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
            </select>
          </label>
        </form>
      </div>
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
