import React from 'react';
import { Link } from '@reach/router';

const ArticleCard = props => {
  const {
    title,
    author,
    topic,
    created_at,
    votes,
    comments_count
  } = props.article;
  return (
    <li>
      <h3>{title}</h3>
      <Link to={`/articles/${topic}`}>
        <p>{topic}</p>
      </Link>
      Author: {author}
      <p>{created_at}</p>
      <p>
        Votes: {votes} | Commets: {comments_count ? comments_count : 0}
      </p>
    </li>
  );
};

export default ArticleCard;
