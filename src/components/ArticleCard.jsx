import React from 'react';
import { Link } from '@reach/router';
import * as utils from '../utils/utils';

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
    <li>
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
    </li>
  );
};

export default ArticleCard;
