import React from 'react';

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
    <div>
      <li>
        {title}
        {author}
        {topic}
        {created_at}
        {votes}
        {comments_count}
      </li>
    </div>
  );
};

export default ArticleCard;
