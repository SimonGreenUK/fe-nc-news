import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from './utils/api';
import * as utils from './utils/utils';

class Sidebar extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <aside className="sidebar">
        <h2>Topics</h2>
        <li>
          <Link to={'/articles'}>All</Link>
        </li>
        {this.state.topics.map(topic => {
          return (
            <li key={topic.slug}>
              <Link to={`/articles/${topic.slug.toLowerCase()}`}>
                {topic.slug}
              </Link>
            </li>
          );
        })}
      </aside>
    );
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api
      .getTopics()
      .then(topics => {
        return topics.map(topic => utils.topicFormatter(topic));
      })
      .then(topics => {
        this.setState({ topics });
      });
  };
}

export default Sidebar;
