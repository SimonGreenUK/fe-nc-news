import React from 'react';
import { Link } from '@reach/router';
import * as utils from '../utils/utils';
import Card from './Card';
import styled from 'styled-components';

const ArticlePostInfo = styled.div`
  font-size: 0.7rem;
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
    <Card>
      <Link to={`/articles/${topic.toLowerCase()}/${article_id}`}>
        <h3>{title}</h3>
      </Link>
      <ArticlePostInfo>
        <Link to={`/articles/${topic.toLowerCase()}`}>
          <span>{utils.capitaliseString(topic)}</span>
        </Link>
        <span> | </span>
        <em>{author}</em>
        <span> | </span>
        <span>{utils.formatDate(created_at)}</span>
      </ArticlePostInfo>
      <p>
        Votes: {votes} | Comments: {comment_count}
      </p>
    </Card>
  );
};

export default ArticleCard;
