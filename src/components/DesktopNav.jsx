import React from 'react';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
import * as api from '../utils/api';
import * as utils from '../utils/utils';

class DesktopNav extends React.Component {
  state = {
    topics: [],
    isLoading: true
  };
  render() {
    return (
      <nav className="desktop-nav">
        {!this.state.isLoading && (
          <ul>
            <li>
              <Link to={'/articles'}>All</Link>
            </li>
            {this.state.topics.map(topic => {
              return (
                <li key={topic.slug}>
                  <Link to={`/articles/${topic.slug.toLowerCase()}`}>
                    {utils.capitaliseString(topic.slug)}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        {this.state.isLoading && (
          <h2>
            <strong>LOADING...</strong>
          </h2>
        )}
      </nav>
    );
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api
      .getTopics()
      .then(topics => {
        this.setState({ topics, isLoading: false });
      })
      .catch(({ response: { data } }) => {
        navigate(`/err`, {
          state: { msg: data.msg },
          replace: true
        });
      });
  };
}

export default DesktopNav;
