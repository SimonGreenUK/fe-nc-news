import React from 'react';
import { navigate } from '@reach/router';
import * as api from '../utils/api';
import * as utils from '../utils/utils';
import ArticleCard from '../components/ArticleCard';
import SortSelect from '../components/SortSelect';
import Loading from '../components/Loading';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

class ArticlesList extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: ''
  };
  render() {
    return (
      <>
        <h2>
          {this.props.topic ? utils.capitaliseString(this.props.topic) : 'All'}
        </h2>
        <SortSelect
          updateArticleSort={this.updateArticleSort}
          sort_by={this.state.sort_by}
        />
        {!this.state.isLoading && (
          <>
            <List>
              {this.state.articles.map(article => {
                return (
                  <ArticleCard article={article} key={article.article_id} />
                );
              })}
            </List>
          </>
        )}
        {this.state.isLoading && <Loading />}
      </>
    );
  }

  componentDidMount() {
    this.fetchArticles(this.props.topic);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles(this.props.topic);
    } else if (prevState.sort_by !== this.state.sort_by) {
      this.fetchArticles(this.props.topic, this.state.sort_by);
    }
  }

  fetchArticles = (topic, sort_by) => {
    api
      .getArticles(topic, sort_by)
      .then(articles => {
        this.setState({ articles, isLoading: false });
      })
      .catch(({ response: { data } }) => {
        navigate(`/err`, {
          state: { msg: data.msg },
          replace: true
        });
      });
  };

  updateArticleSort = sort_by => {
    this.setState({ sort_by });
  };
}

export default ArticlesList;
