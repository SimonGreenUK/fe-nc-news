import React from 'react';
import * as api from '../utils/api';

class UserLogin extends React.Component {
  state = {
    users: []
  };
  render() {
    return (
      <div>
        {/* <p>user-image</p> */}
        <h5>Username: {this.props.loggedInUser}</h5>
        <form>
          <label>
            <select onChange={this.handleChange}>
              <option value="">Select user</option>
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
    this.props.updateLoggedInUser(e.target.value);
    console.log(e.target.value);
  };
}

export default UserLogin;
