import React from 'react';
import { navigate } from '@reach/router';
import * as api from '../utils/api';
import CommentCard from './CommentCard';

class CommentsList extends React.Component {
  state = {
    comments: [],
    isLoading: true
  };
  render() {
    return (
      <>
        {!this.state.isLoading && (
          <ul>
            {this.state.comments.map(comment => {
              return <CommentCard {...comment} key={comment.comment_id} />;
            })}
          </ul>
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
}

export default CommentsList;
