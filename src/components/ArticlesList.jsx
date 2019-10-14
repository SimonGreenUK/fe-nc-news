import React from 'react';
import * as api from './utils/api';
import ArticleCard from './ArticleCard';

class ArticlesList extends React.Component {
  state = {
    articles: []
  };
  render() {
    return (
      <main className="main">
        {this.state.articles.map(article => {
          return <ArticleCard article={article} key={article.article_id} />;
        })}
      </main>
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
    api.getArticles(topic).then(articles => {
      this.setState({ articles });
    });
  };
}

export default ArticlesList;
