import React from 'react';
import * as utils from '../../utils/utils';
import Card from '../../components/Card';
import styled from 'styled-components';
import LinkStyled from '../../components/LinkStyled';

const ArticlePostInfo = styled.div`
  font-size: 0.8rem;
`;

const VotesAndCommentsCount = styled.p`
  font-size: 0.8rem;
  color: var(--light-gray-text);
`;

const PaleText = styled.span`
  color: var(--light-gray-text);
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
      <LinkStyled to={`/articles/${topic.toLowerCase()}/${article_id}`}>
        <h3>{title}</h3>
      </LinkStyled>
      <ArticlePostInfo>
        <LinkStyled to={`/articles/${topic.toLowerCase()}`}>
          <span>{utils.capitaliseString(topic)}</span>
        </LinkStyled>
        <span> | </span>
        <PaleText>
          <em>{author}</em>
        </PaleText>
        <span> | </span>
        <PaleText>{utils.formatDate(created_at)}</PaleText>
      </ArticlePostInfo>
      <VotesAndCommentsCount>
        Votes: {votes} | Comments: {comment_count}
      </VotesAndCommentsCount>
    </Card>
  );
};

export default ArticleCard;
