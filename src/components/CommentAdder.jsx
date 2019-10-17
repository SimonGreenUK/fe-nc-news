import React from 'react';
import styled from 'styled-components';
import no_img from '../assets/images/no_img.png';

const UserImg = styled.img`
  max-width: 40px;
  height: auto;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px 1rem 10px 0;
`;

const UserInfo = styled.div`
  display: flex;
  min-width: 120px;
  justify-content: space-between;
  align-items: center;
`;

class CommentAdder extends React.Component {
  state = {
    commentBody: ''
  };
  render() {
    return (
      <>
        <UserInfoWrapper>
          <UserInfo>
            <UserImg
              src={this.props.loggedInUser.avatar_url}
              onError={e => {
                e.target.onerror = null;
                e.target.src = no_img;
              }}
              alt="user avatar"
            />
            <span>{this.props.loggedInUser.username}</span>
          </UserInfo>
        </UserInfoWrapper>

        <form onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text-area"
              onChange={this.handleChange}
              name="commentBody"
              value={this.state.commentBody}
              placeholder="Add a comment..."
              required
            />
          </label>
          <button>Comment</button>
        </form>
      </>
    );
  }

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addComment(
      this.props.loggedInUser.username,
      this.state.commentBody
    );
    this.setState({ commentBody: '' });
  };
}

export default CommentAdder;
