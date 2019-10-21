import React from 'react';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
import * as api from '../../utils/api';
import * as utils from '../../utils/utils';
import styled from 'styled-components';

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 12px;
  border-bottom: 4px solid transparent;
  transition: all 0.3s ease;
  :hover {
    color: var(--turquoise-main);
    text-decoration: none;
    border-bottom: 4px solid var(--turquoise-main);
  }
`;

const DesktopMenuList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin-bottom: 8px;
`;

const DesktopMenuListItem = styled.li`
  padding: 5px;
  list-style: none;
`;

class DesktopMenu extends React.Component {
  state = {
    topics: [],
    isLoading: true
  };
  render() {
    return (
      <div className="desktop-menu">
        <DesktopMenuList>
          <DesktopMenuListItem>
            <NavLink to={'/articles'}>All</NavLink>
          </DesktopMenuListItem>
          {this.state.topics.map(topic => {
            return (
              <DesktopMenuListItem key={topic.slug}>
                <NavLink to={`/articles/${topic.slug.toLowerCase()}`}>
                  {utils.capitaliseString(topic.slug)}
                </NavLink>
              </DesktopMenuListItem>
            );
          })}
        </DesktopMenuList>
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
