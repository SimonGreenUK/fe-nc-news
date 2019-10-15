import React from 'react';
import { navigate } from '@reach/router';
import * as api from '../utils/api';
import CommentCard from './CommentCard';
import CommentAdder from './CommentAdder';

class CommentsList extends React.Component {
  state = {
    comments: [],
    isLoading: true
  };
  render() {
    return (
      <>
        {!this.state.isLoading && (
          <>
            <CommentAdder
              loggedInUser={this.props.loggedInUser}
              addComment={this.addComment}
            />
            <ul>
              {this.state.comments.map(comment => {
                return <CommentCard {...comment} key={comment.comment_id} />;
              })}
            </ul>
          </>
        )}
        {this.state.isLoading && (
          <h2>
            <strong>LOADING COMMENTS...</strong>
          </h2>
        )}
      </>
    );
  }

  componentDidMount() {
    this.fetchComments(this.props.article_id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.comments.length !== this.state.comments.length) {
      this.fetchComments(this.props.article_id);
      this.setState({ isLoading: true });
    }
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
    api.postComment(this.props.article_id, username, body).then(comment => {
      this.setState(({ comments }) => {
        const tempComments = [...comments];
        tempComments.push(comment);
        return {
          comments: tempComments
        };
      });
    });
  };
}

export default CommentsList;
