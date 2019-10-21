import React from 'react';
import styled from 'styled-components';
import user_default from '../../assets/images/user_default.jpg';
import Button from '../../components/Button';
import Textarea from '../../components/Textarea';

const CommentAdderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 200px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const UserImg = styled.img`
  max-width: 40px;
  height: auto;
  margin-right: 8.5px;
  border-radius: 50%;
`;

const UserInfoWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 35px;
`;

const UserInfo = styled.div`
  display: flex;
  min-width: 120px;
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
            <Textarea
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
