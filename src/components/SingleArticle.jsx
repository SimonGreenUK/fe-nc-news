import React from 'react';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
import * as api from '../utils/api';
import * as utils from '../utils/utils';
import CommentsList from './CommentsList';
import Voter from './Voter';

class SingleArticle extends React.Component {
  state = {
    article: {},
    isLoading: true
  };
  render() {
    const {
      article_id,
      title,
      topic,
      author,
      created_at,
      votes,
      body
    } = this.state.article;
    return (
      <>
        {!this.state.isLoading && (
          <div>
            <h3>{title}</h3>
            <Link to={`/articles/${topic}`}>
              <p>{utils.capitaliseString(topic)}</p>
            </Link>
            <p>Author: {author}</p>
            <p>{utils.formatDate(created_at)}</p>
            <p>{body}</p>
            <Voter votes={votes} type="articles" id={article_id} />
            <CommentsList
              article_id={article_id}
              loggedInUser={this.props.loggedInUser}
            />
          </div>
        )}
        {this.state.isLoading && (
          <h2>
            <strong>LOADING...</strong>
          </h2>
        )}
      </>
    );
  }

  componentDidMount() {
    this.fetchSingleArticle(this.props.article_id);
  }

  fetchSingleArticle = article_id => {
    api
      .getSingleArticle(article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(({ response: { data } }) => {
        navigate(`/err`, {
          state: { msg: data.msg },
          replace: true
        });
      });
  };
}

export default SingleArticle;
