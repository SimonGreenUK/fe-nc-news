import React from 'react';
import { Link } from '@reach/router';
import * as utils from '../utils/utils';
import Card from './Card';

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
      <Link to={`/articles/${topic.toLowerCase()}`}>
        <p>{utils.capitaliseString(topic)}</p>
      </Link>
      <p>Author: {author}</p>
      <p>{utils.formatDate(created_at)}</p>
      <p>
        Votes: {votes} | Comments: {comment_count}
      </p>
    </Card>
  );
};

export default ArticleCard;
