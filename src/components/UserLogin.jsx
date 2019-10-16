import React from 'react';
import * as api from '../utils/api';
import no_img from '../assets/images/no_img.png';

class UserLogin extends React.Component {
  state = {
    users: []
  };
  render() {
    return (
      <div>
        <img
          src={this.props.loggedInUser.avatar_url}
          onError={e => {
            e.target.onerror = null;
            e.target.src = no_img;
          }}
          alt="user avatar"
        />
        <h5>Username: {this.props.loggedInUser.username}</h5>
        <form>
          <label>
            <select onChange={this.handleChange} defaultValue="">
              <option value="" disabled>
                Select user
              </option>
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
    api.getAllUsers().then(users => {
      this.setState({ users });
    });
  };

  handleChange = e => {
    const user = this.state.users.find(user => {
      return user.username === e.target.value;
    });
    this.props.updateLoggedInUser(user);
  };
}

export default UserLogin;
