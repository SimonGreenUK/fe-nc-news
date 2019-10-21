import React from 'react';
import * as utils from '../../utils/utils';
import Voter from '../../components/Voter';
import Card from '../../components/Card';
import Button from '../../components/Button';
import styled from 'styled-components';

const ErrorMessage = styled.p`
  color: red;
  font-size: 0.7rem;
`;

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
      <Voter votes={votes} type="comments" id={comment_id} />
      {loggedInUser.username === author && (
        <Button onClick={handleClick} name={comment_id}>
          Delete comment
        </Button>
      )}
      {props.deleteError && (
        <ErrorMessage>
          Error: your comment may not have been deleted - refresh the page
        </ErrorMessage>
      )}
    </Card>
  );
};

export default CommentCard;
