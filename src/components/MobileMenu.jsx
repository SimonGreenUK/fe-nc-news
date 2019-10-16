import React from 'react';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';
import * as api from '../utils/api';
import * as utils from '../utils/utils';
import styled from 'styled-components';

const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: fixed;
  right: 55px;
  background: lightgray;
  overflow: hidden;
  transition: width 0.3s ease - out;
  text-align: left;
`;

class MobileMenu extends React.Component {
  state = {
    topics: [],
    isLoading: true
  };
  render() {
    return (
      <MobileMenuWrapper
        className={
          this.props.mobileNavOpen ? 'mobile-nav-visible' : 'mobile-nav-hidden'
        }
      >
        <>
          {!this.state.isLoading && (
            <div>
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
            </div>
          )}
          {this.state.isLoading && (
            <h2>
              <strong>LOADING...</strong>
            </h2>
          )}
        </>
      </MobileMenuWrapper>
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

export default MobileMenu;
