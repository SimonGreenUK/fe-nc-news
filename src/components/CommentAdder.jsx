import React from 'react';
import styled from 'styled-components';
import user_default from '../assets/images/user_default.jpg';
import Button from './Button';
import TextInput from './TextInput';

const CommentAdderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 120px;
`;

const Form = styled.form`
  display: flex;
`;

const UserImg = styled.img`
  max-width: 40px;
  height: auto;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
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
      <CommentAdderWrapper>
        <UserInfoWrapper>
          <UserInfo>
            <UserImg
              src={this.props.loggedInUser.avatar_url}
              onError={e => {
                e.target.onerror = null;
                e.target.src = user_default;
              }}
              alt="user avatar"
            />
            <span>{this.props.loggedInUser.username}</span>
          </UserInfo>
        </UserInfoWrapper>

        <Form onSubmit={this.handleSubmit}>
          <label>
            <TextInput
              type="text"
              onChange={this.handleChange}
              name="commentBody"
              value={this.state.commentBody}
              placeholder="Add a comment..."
              required
            />
          </label>
          <Button>Comment</Button>
        </Form>
      </CommentAdderWrapper>
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
