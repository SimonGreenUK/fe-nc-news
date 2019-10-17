import React from 'react';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
import * as api from '../utils/api';
import * as utils from '../utils/utils';
import styled from 'styled-components';

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
  :hover {
    color: lightgray;
    background-color: rgba(255, 255, 255, 0.2);
    text-decoration: none;
  }
`;

class DesktopMenu extends React.Component {
  state = {
    topics: [],
    isLoading: true
  };
  render() {
    return (
      <div className="desktop-menu">
        <ul>
          <li>
            <NavLink to={'/articles'}>All</NavLink>
          </li>
          {this.state.topics.map(topic => {
            return (
              <li key={topic.slug}>
                <NavLink to={`/articles/${topic.slug.toLowerCase()}`}>
                  {utils.capitaliseString(topic.slug)}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
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

export default DesktopMenu;
