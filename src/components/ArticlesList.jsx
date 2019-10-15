import React from 'react';
import * as api from '../utils/api';
import * as utils from '../utils/utils';
import ArticleCard from './ArticleCard';

class ArticlesList extends React.Component {
  state = {
    articles: []
  };
  render() {
    return (
      <ul>
        {this.state.articles.map(article => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </ul>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchArticles(this.props.topic);
    }
  }

  fetchArticles = topic => {
    api
      .getArticles(topic)
      .then(articles => {
        return articles.map(article => utils.articleFormatter(article));
      })
      .then(articles => {
        this.setState({ articles });
      });
  };
}

export default ArticlesList;
