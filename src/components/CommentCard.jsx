import React from 'react';
import * as utils from '../utils/utils';
import Voter from './Voter';
import Card from './Card';
import Button from './Button';

const CommentCard = props => {
  const handleClick = e => {
    const { name } = e.target;
    props.deleteComment(name);
  };
  const { author, body, created_at, votes, loggedInUser, comment_id } = props;
  return (
    <Card>
      <p>
        <strong>{author}</strong> {utils.formatDate(created_at)}
      </p>
      <p>{body}</p>
      <p>Comment votes: {votes}</p>
      <Voter votes={votes} type="comments" id={comment_id} />
      {loggedInUser.username === author && (
        <Button onClick={handleClick} name={comment_id}>
          Delete comment
        </Button>
      )}
    </Card>
  );
};

export default CommentCard;
