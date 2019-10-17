import React from 'react';
import * as utils from '../utils/utils';
import Voter from './Voter';
import styled from 'styled-components';

const CardItem = styled.li`
  border-radius: 5px;
  margin: 0 0 10px 0;
  padding: 5px 20px 5px 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  }
`;

const CommentCard = props => {
  const handleClick = e => {
    const { name } = e.target;
    props.deleteComment(name);
  };
  const { author, body, created_at, votes, loggedInUser, comment_id } = props;
  return (
    <CardItem>
      <p>
        <strong>{author}</strong> {utils.formatDate(created_at)}
      </p>
      <p>{body}</p>
      <p>Comment votes: {votes}</p>
      <Voter votes={votes} type="comments" id={comment_id} />
      {loggedInUser.username === author && (
        <button onClick={handleClick} name={comment_id}>
          Delete comment
        </button>
      )}
    </CardItem>
  );
};

export default CommentCard;
