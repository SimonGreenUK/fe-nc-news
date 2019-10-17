import React from 'react';
import { navigate } from '@reach/router';
import * as api from '../utils/api';
import CommentCard from './CommentCard';
import CommentAdder from './CommentAdder';
import styled from 'styled-components';
// import Loading from '../components/Loading';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

class CommentsList extends React.Component {
  state = {
    comments: [],
    isLoading: true
  };
  render() {
    return (
      <>
        <CommentAdder
          loggedInUser={this.props.loggedInUser}
          addComment={this.addComment}
        />
        <h4>Comments</h4>
        <List>
          {this.state.comments.map(comment => {
            return (
              <CommentCard
                {...comment}
                key={comment.comment_id}
                loggedInUser={this.props.loggedInUser}
                deleteComment={this.deleteComment}
              />
            );
          })}
        </List>
      </>
    );
  }

  componentDidMount() {
    this.fetchComments(this.props.article_id);
  }

  fetchComments = article_id => {
    api
      .getComments(article_id)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(({ response: { data } }) => {
        navigate(`/err`, {
          state: { msg: data.msg },
          replace: true
        });
      });
  };

  addComment = (username, body) => {
    api
      .postComment(this.props.article_id, username, body)
      .then(comment => {
        this.setState(({ comments }) => {
          return {
            comments: [comment, ...comments]
          };
        });
      })
      .catch(({ response: { data } }) => {
        navigate(`/err`, {
          state: { msg: data.msg },
          replace: true
        });
      });
  };

  deleteComment = comment_id => {
    api.deleteComment(comment_id).then(() => {
      this.fetchComments(this.props.article_id);
    });
  };
}

export default CommentsList;
