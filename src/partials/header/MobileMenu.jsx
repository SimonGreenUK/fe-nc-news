import React from 'react';
import { navigate } from '@reach/router';
import * as api from '../../utils/api';
import * as utils from '../../utils/utils';
import styled from 'styled-components';
import LinkStyled from '../../components/LinkStyled';

const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: flex-start;
  height: 100vh;
  position: fixed;
  background: black;
  overflow: hidden;
  transition: width 0.3s ease - out;
  text-align: left;
  color: white;
  font-size: 1.5rem;

  li {
    list-style: none;
  }
`;

const MobileMenuInnerWrapper = styled.div`
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
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
          this.props.mobileMenuOpen ? 'mobile-nav-visible' : 'mobile-nav-hidden'
        }
      >
        {!this.state.isLoading && (
          <MobileMenuInnerWrapper>
            <li>
              <LinkStyled
                to={'/articles'}
                onClick={this.props.toggleMobileMenu}
              >
                All
              </LinkStyled>
            </li>
            {this.state.topics.map(topic => {
              return (
                <li key={topic.slug}>
                  <LinkStyled
                    to={`/articles/${topic.slug.toLowerCase()}`}
                    onClick={this.props.toggleMobileMenu}
                  >
                    {utils.capitaliseString(topic.slug)}
                  </LinkStyled>
                </li>
              );
            })}
          </MobileMenuInnerWrapper>
        )}
        {this.state.isLoading && (
          <h2>
            <strong>LOADING...</strong>
          </h2>
        )}
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
