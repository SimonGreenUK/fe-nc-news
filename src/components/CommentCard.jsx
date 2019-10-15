import React from 'react';
import * as utils from '../utils/utils';

const CommentCard = ({ author, body, created_at, votes }) => {
  return (
    <li>
      <p>
        <strong>{author}</strong> {utils.formatDate(created_at)}
      </p>
      <p>{body}</p>
      <p>Comment votes: {votes}</p>
    </li>
  );
};

export default CommentCard;
