import React from 'react';
import { Link } from '@reach/router';
import * as utils from '../utils/utils';
import styled from 'styled-components';
import Card from './styled-components/Card';

// const CardItem = styled.li`
//   border-radius: 5px;
//   margin: 0 0 10px 0;
//   padding: 5px 20px 5px 20px;
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
//   transition: box-shadow 0.2s;
//   :hover {
//     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
//   }
// `;

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
