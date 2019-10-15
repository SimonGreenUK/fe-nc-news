import React from 'react';
import * as api from '../utils/api';
import ArticleCard from './ArticleCard';

class ArticlesList extends React.Component {
  state = {
    articles: [],
    isLoading: true
  };
  render() {
    return (
      <>
        {!this.state.isLoading && (
          <ul>
            {this.state.articles.map(article => {
              return <ArticleCard article={article} key={article.article_id} />;
            })}
          </ul>
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

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.fetchArticles(this.props.topic);
      this.setState({ isLoading: true });
    }
  }

  fetchArticles = topic => {
    api.getArticles(topic).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default ArticlesList;
