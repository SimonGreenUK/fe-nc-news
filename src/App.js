import React from 'react';
import { Router } from '@reach/router';
import './styles/layout.css';
import './styles/fonts.css';
import './styles/colours.css';
import './styles/mobile-nav.css';
import styled from 'styled-components';
import Header from './partials/header/Header';
import Footer from './partials/footer/Footer';
import ArticlesList from './pages/ArticlesList';
import SingleArticle from './pages/SingleArticle';
import ChangeUser from './pages/ChangeUser';
import MobileMenu from './partials/header/MobileMenu';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import throttle from 'lodash.throttle';

const MainGridWrapper = styled.main`
  grid-area: main;
  display: grid;
  grid-template-columns: minmax(1.2rem, 1fr) minmax(auto, 850px) minmax(
      1.2rem,
      1fr
    );
`;

const MainContent = styled.div`
  grid-column: 2;
  padding-top: 20px;
`;

class App extends React.Component {
  state = {
    loggedInUser: {},
    mobileMenuOpen: false
  };
  render() {
    return (
      <div className="App">
        <Header
          loggedInUser={this.state.loggedInUser}
          toggleMobileMenu={this.toggleMobileMenu}
        />
        <MainGridWrapper>
          <MainContent>
            <Router primary={false}>
              <HomePage path="/" />
              <ArticlesList path="/articles" />
              <ArticlesList path="/articles/:topic" />
              <SingleArticle
                path="/articles/:topic/:article_id"
                loggedInUser={this.state.loggedInUser}
              />
              <ChangeUser
                path="/change-user"
                loggedInUser={this.state.loggedInUser}
                updateLoggedInUser={this.updateLoggedInUser}
              />
              <ErrorPage default />
            </Router>
          </MainContent>
        </MainGridWrapper>
        <MobileMenu
          mobileMenuOpen={this.state.mobileMenuOpen}
          toggleMobileMenu={this.toggleMobileMenu}
        />
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    let previousUser = {
      username: 'jessjelly',
      avatar_url: 'https://i.imgur.com/SA3s3zo.jpg',
      name: 'Jess Jelly'
    };
    if (localStorage.loggedInUser) {
      previousUser = JSON.parse(localStorage.getItem('loggedInUser'));
    }
    this.setState({ loggedInUser: previousUser });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.mobileMenuOpen !== this.state.mobileMenuOpen) {
      if (this.state.mobileMenuOpen) {
        document.body.classList.remove('allow-scrollable-body');
        document.body.classList.add('prevent-scrollable-body');
        window.scrollTo(0, 0);
      } else {
        document.body.classList.add('allow-scrollable-body');
        document.body.classList.remove('prevent-scrollable-body');
      }
    }
  }

  updateLoggedInUser = user => {
    // console.log(user);
    this.setState({ loggedInUser: user });
    const userData = JSON.stringify(user);
    localStorage.setItem('loggedInUser', userData);
  };

  toggleMobileMenu = () => {
    this.setState(currentState => {
      return {
        mobileMenuOpen: !currentState.mobileMenuOpen
      };
    });
  };

  handleResize = throttle(e => {
    const windowSize = window.innerWidth;
    if (this.state.mobileMenuOpen && windowSize > 750) {
      this.setState({ mobileMenuOpen: false });
    }
  }, 2000);
}

export default App;
