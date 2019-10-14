import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from './utils/api';

class Sidebar extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <aside className="sidebar">
        <li>
          <Link to={'/articles'}>all articles</Link>
        </li>
        {this.state.topics.map(topic => {
          return (
            <li key={topic.slug}>
              <Link to={`/articles/${topic.slug}`}>{topic.slug}</Link>
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
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  };
}

export default Sidebar;
