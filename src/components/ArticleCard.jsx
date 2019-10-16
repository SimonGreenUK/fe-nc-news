import React from 'react';
import { Link } from '@reach/router';
import * as utils from '../utils/utils';
import styled from 'styled-components';

const CardItem = styled.li`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 1.5rem; */
  border-radius: 5px;
  margin: 0 0 10px 0;
  padding: 5px 5px 5px 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  }
`;

const ArticleCard = props => {
  const {
    article_id,
    title,
    author,
    topic,
    created_at,
    votes,
    comment_count
  } = props.article;
  return (
    <CardItem>
      <Link to={`/articles/${topic.toLowerCase()}/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <Link to={`/articles/${topic.toLowerCase()}`}>
        <p>{utils.capitaliseString(topic)}</p>
      </Link>
      <p>Author: {author}</p>
      <p>{utils.formatDate(created_at)}</p>
      <p>
        Votes: {votes} | Comments: {comment_count}
      </p>
    </CardItem>
  );
};

export default ArticleCard;
