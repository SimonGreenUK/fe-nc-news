import React from 'react';
import { navigate } from '@reach/router';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';
import SortSelect from './SortSelect';

class ArticlesList extends React.Component {
  state = {
    articles: [],
    isLoading: true,
    sort_by: ''
  };
  render() {
    return (
      <>
        {!this.state.isLoading && (
          <>
            <SortSelect updateArticleSort={this.updateArticleSort} />
            <ul>
              {this.state.articles.map(article => {
                return (
                  <ArticleCard article={article} key={article.article_id} />
                );
              })}
            </ul>
          </>
        )}
        {this.state.isLoading && (
          <h2>
            <strong>LOADING ARTICLES...</strong>
          </h2>
        )}
      </>
    );
  }

  componentDidMount() {
    this.fetchArticles(this.props.topic);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.topic !== this.props.topic) {
      this.fetchArticles(this.props.topic);
      this.setState({ isLoading: true });
    } else if (prevState.sort_by !== this.state.sort_by) {
      this.fetchArticles(this.props.topic, this.state.sort_by);
      // this.setState({ isLoading: true });
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
