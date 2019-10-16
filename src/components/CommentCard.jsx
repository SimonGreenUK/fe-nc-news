import React from 'react';
import * as utils from '../utils/utils';

const CommentCard = props => {
  const handleClick = e => {
    const { name } = e.target;
    props.deleteComment(name);
  };
  const { author, body, created_at, votes, loggedInUser, comment_id } = props;
  return (
    <li>
      <p>
        <strong>{author}</strong> {utils.formatDate(created_at)}
      </p>
      <p>{body}</p>
      <p>Comment votes: {votes}</p>
      {loggedInUser === author && (
        <button onClick={handleClick} name={comment_id}>
          Delete comment
        </button>
      )}
    </li>
  );
};

export default CommentCard;
